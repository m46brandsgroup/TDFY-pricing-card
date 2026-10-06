   let swiperInstance = null;

function formatPriceValue(value, showFraction) {
    const num = Number(value);
    if (showFraction === true) {
        return num.toFixed(2).replace(/\.00$/, '');
    }
    const decimal = num - Math.floor(num);
    return decimal >= 0.5 ? Math.ceil(num) : Math.floor(num);
}

window.switchConsistencyVariant = function (btn, idx, variantKey) {
    const colGrid = btn.closest('.prt-col-grid-v2');
    if (!colGrid) return;

    const toggleBox = btn.closest('.consistency-toggle-box');

    // Toggle active state ONLY on this specific toggle button box so they operate independently
    if (toggleBox) {
        toggleBox.querySelectorAll('.consistency-toggle-opt').forEach((b, i) => {
            if (i === idx) b.classList.add('active');
            else b.classList.remove('active');
        });
    }

    const variantsStr = colGrid.getAttribute('data-variants');
    if (!variantsStr) return;

    try {
        const allVariants = JSON.parse(variantsStr);
        let variants = Array.isArray(allVariants)
            ? allVariants
            : (allVariants[variantKey] || allVariants[variantKey?.split('_')[0]] || allVariants['evaluation'] || []);
        const variant = variants[idx] || variants[0];
        if (!variant) return;

        const basePrice = Number(variant.basePrice);
        const disC = Number(variant.discount);
        const save = (basePrice * disC) / 100;
        const actual_val_pre = Number(100 - disC);

        const current_price = formatPriceValue((basePrice * actual_val_pre) / 100, variant.showFraction);

        // Keep pricing synchronized across both faces of this account card.
        const targetContainer = colGrid;

        // Update strikethrough price
        targetContainer.querySelectorAll('.new_price_prev-v2.v3 div').forEach((el) => {
            el.textContent = `$${variant.showFraction === true ? formatPriceValue(basePrice, true) : basePrice}`;
        });
        targetContainer.querySelectorAll('.new_price_prev-v2.v3').forEach((el) => {
            el.style.display = save ? 'block' : 'none';
        });

        // Update current discounted price
        targetContainer.querySelectorAll('.new_price_current-v2.v3 div').forEach((el) => {
            el.textContent = `$${current_price}`;
        });

        // Update discount coupon tag
        targetContainer.querySelectorAll('.price_details_cp_tag.v3 div').forEach((el) => {
            el.textContent = `Save $${formatPriceValue(save, variant.showFraction)} with code ${variant.couponCode}`;
        });
        targetContainer.querySelectorAll('.price_details_cp_tag.v3').forEach((el) => {
            el.style.opacity = save ? '1' : '0';
        });

        // placementId may include a plan_addon_id for the selected consistency.
        const placementParams = new URLSearchParams(`plan_id=${variant.placementId}`);
        targetContainer.querySelectorAll('.tdfy-style-btn.price-btn-v3').forEach((link) => {
            const url = new URL(link.href);
            url.searchParams.delete('plan_addon_id');
            placementParams.forEach((value, key) => url.searchParams.set(key, value));
            link.href = url.href;
        });
    } catch (e) {
        console.error('Error switching consistency variant:', e);
    }
};

function price_table() {
    const pr_container = document.querySelector('[data-price-table]');
    if (pr_container != undefined) {
        const sliderEl = pr_container.querySelector('.ptr-grid-row-v2');

        // Dynamically build validation sets from priceData
        const planSet = new Set((typeof priceData !== 'undefined' ? priceData : []).map((p) => p.name
            .toLowerCase()));
        const brokerSet = new Set();
        const sizeSet = new Set();
        (typeof priceData !== 'undefined' ? priceData : []).forEach((p) => {
            p.broker.forEach((b) => {
                brokerSet.add(b.broker_name.toLowerCase());
                b.account_size.forEach((sz) => {
                    sizeSet.add(sz.name.toLowerCase());
                });
            });
        });

        function getDiscountValue(couponCode, defaultVal = 'price') {
            let setVal;
            const codeKey = couponCode ? couponCode.toLowerCase() : null;
            const details = codeKey && couponDetails[codeKey] ? couponDetails[codeKey] : couponDetails
                .default_code;
            if (defaultVal == 'price') {
                setVal = Number(details[1]);
            } else {
                setVal = details[0].toUpperCase();
            }
            return setVal;
        }

        function destroySwiper() {
            if (swiperInstance) {
                swiperInstance.destroy(true, true);
                swiperInstance = null;

                const container = pr_container.querySelector('.new_price_details_inr');
                if (container) {
                    container.classList.remove('swiper');
                    const paginationEl = container.querySelector('.swiper-pagination');
                    if (paginationEl) paginationEl.style.display = 'none';
                }
                if (sliderEl) {
                    sliderEl.classList.remove('swiper-wrapper');
                    sliderEl.style.transform = '';
                    const slides = sliderEl.querySelectorAll('.prt-col-grid-v2');
                    slides.forEach((slide) => slide.classList.remove('swiper-slide'));
                }
            }
        }

        function initMobileSlider() {
            const container = pr_container.querySelector('.new_price_details_inr');
            if (!container || !sliderEl) return;

            if (!swiperInstance) {
                let paginationEl = container.querySelector('.swiper-pagination');
                if (!paginationEl) {
                    paginationEl = document.createElement('div');
                    paginationEl.className = 'swiper-pagination';
                    container.appendChild(paginationEl);
                } else {
                    paginationEl.style.display = 'block';
                }

                container.classList.add('swiper');
                sliderEl.classList.add('swiper-wrapper');
                const slides = sliderEl.querySelectorAll('.prt-col-grid-v2');
                slides.forEach((slide) => slide.classList.add('swiper-slide'));

                if (typeof Swiper !== 'undefined') {
                    destroySwiper();
                    swiperInstance = new Swiper(container, {
                        wrapperClass: 'ptr-grid-row-v2',
                        slideClass: 'prt-col-grid-v2',
                        slidesPerView: 'auto',
                        pagination: {
                            el: paginationEl,
                            clickable: true,
                        },
                    });
                }
            }
        }

        // On resize
        window.addEventListener('resize', initMobileSlider);

        function init() {
            const all_type = pr_container.querySelectorAll("input[type='radio'][name='plan_name']");
            const all_acc_broker = pr_container.querySelectorAll("input[type='radio'][name='plan_broker']");

            const prms = new URLSearchParams(window.location.search);
            const planParam = prms.get('plan')?.toLowerCase();
            const sizeParam = prms.get('size')?.toLowerCase();
            const platformParam = prms.get('platform')?.toLowerCase();

            // Validate query params once and log if invalid/missing in inputs
            if (prms.has('plan')) {
                const planVal = prms.get('plan');
                if (!planSet.has(planVal.toLowerCase())) {
                    console.log(`invalid parameter value, plan_name=${planVal}`);
                }
            }

            if (prms.has('size')) {
                const sizeVal = prms.get('size');
                if (!sizeSet.has(sizeVal.toLowerCase())) {
                    console.log(`invalid parameter value, plan_name=${sizeVal}`);
                }
            }

            if (prms.has('platform')) {
                const platformVal = prms.get('platform');
                if (!brokerSet.has(platformVal.toLowerCase())) {
                    console.log(`invalid parameter value, plan_name=${platformVal}`);
                }
            }

            all_type.forEach((el) => {
                el.checked = planParam ? el.value.toLowerCase() === planParam : false;
                el.addEventListener('change', createTable);
            });

            all_acc_broker.forEach((el) => {
                el.checked = platformParam ? el.value.toLowerCase() === platformParam : false;
                el.addEventListener('change', createTable);
            });

            setTimeout(() => {
                createTable();
                if (prms.has('plan') || prms.has('size') || prms.has('platform')) {
                    pr_container.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }, 400);
        }

        function createTable() {
            const all_type = pr_container.querySelectorAll("input[type='radio'][name='plan_name']"),
                all_acc_broker = pr_container.querySelectorAll("input[type='radio'][name='plan_broker']"),
                all_rules = pr_container.querySelectorAll("input[type='radio'][name='plan_rule']");

            const param = {
                name: pr_container.querySelector("input[type='radio'][name='plan_name']:checked")?.value?.toLowerCase(),
                broker: pr_container.querySelector("input[type='radio'][name='plan_broker']:checked")?.value?.toLowerCase(),
            };

            // Find plan (Growth / Select / Lightning)
            const isPlanSelected = priceData.map((p) => {
                return {
                    name: p.name.toLowerCase(),
                    isSelected: p.isSelected,
                };
            });
            all_type.forEach((pln) => {
                isPlanSelected.map((p) => {
                    if (pln.checked) {
                        pln.closest('label').classList.add('active');
                        return;
                    } else {
                        pln.closest('label').classList.remove('active');
                        if (p.name === pln.value.toLowerCase() && p.isSelected && !param.name) {
                            pln.closest('label').classList.add('active');
                            pln.checked = true;
                            param.name = p.name;
                            return;
                        }
                    }
                });
            });

            // Find broker (Tradovate / projectX)
            const selectedPlan = priceData.find((plan) => plan.name.toLowerCase() === param.name);
            const brokerNames = selectedPlan.broker.map((b) => ({
                name: b.broker_name.toLowerCase(),
                isSelected: b.isSelected,
            }));
            const defaultBroker = brokerNames.find((b) => b.isSelected)?.name,
                brokerExists = brokerNames.some((b) => b.name === param.broker?.toLowerCase());
            if (!brokerExists) {
                param.broker = defaultBroker;
            }
            all_acc_broker.forEach((bkr) => {
                const inputValue = bkr.value.toLowerCase();
                const label = bkr.closest('label');
                label.classList.remove('active', 'disabled');
                const match = brokerNames.find((b) => b.name === inputValue);
                if (!match) {
                    label.classList.add('disabled');
                    bkr.checked = false;
                    return;
                }
                if (param.broker === inputValue) {
                    bkr.checked = true;
                    label.classList.add('active');
                } else {
                    bkr.checked = false;
                }
            });

            //Find plan sizes (25K / 50K / 100K / 150K)
            const selectedBroker = selectedPlan.broker.find((br) => br.broker_name.toLowerCase() === param.broker
                .toLowerCase());
            const sizeItems = selectedBroker.account_size.map((sz) => ({
                name: sz.name.toLowerCase(),
                isSelected: sz.isSelected,
                price: sz.price,
                discount: getDiscountValue(sz.couponCode),
                subscription: sz.subscription,
            }));

            const defaultSize = sizeItems.find((s) => s.isSelected)?.name || sizeItems[0]?.name;
            let sizeExists = sizeItems.some((s) => s.name === param.value?.toLowerCase());
            if (!sizeExists) {
                param.value = defaultSize;
            }

            const pr_table_wrapper = document.querySelector('.new_price_details_wrapper-v2');
            if (pr_table_wrapper) {
                const all_classes = [...pr_table_wrapper.classList];
                all_classes.forEach((cls) => {
                    if (cls.startsWith('dny_cla')) {
                        //remove previous class from the wrapper
                        pr_table_wrapper.classList.remove(cls);
                    }
                });
                //add class after all selected radio in wrapper
                pr_table_wrapper.classList.add(`dny_class_${param.name}`, `dny_class_${param.value}`,
                    `dny_class_${param.broker}`);
            }

            //render data
            const v3_table = pr_container.querySelector('.new_price_details-v2.v3');
            if (v3_table) {
                v3_table.classList.remove('loaded');
                const rightColGridRow = v3_table.querySelector('.new_price_details_right-v2.v3 .ptr-grid-row-v2');
                let cc_discount = 0;
                const accountSizes = selectedBroker.account_size;
                const visibleSizes = accountSizes.filter((acc) => acc.isVisible !== false);
                if (visibleSizes.length === 0) {
                    rightColGridRow.innerHTML = '';
                    return;
                }
                const refSize = visibleSizes[0];

                let hasFunded = refSize.funded && Object.keys(refSize.funded).length > 0;
                let hasEval = refSize.evaluation && refSize.evaluation.length > 0;

                let rightHTML = '';
                const hasAnySelected = visibleSizes.some((acc) => acc.isSelected);
                visibleSizes.forEach((acc, index) => {
                    let isSelected = acc.isSelected || (!hasAnySelected && index === 0);

                    const disC = Number(getDiscountValue(acc.couponCode, 'price'));
                    cc_discount = disC;
                    const couponCodeStr = getDiscountValue(acc.couponCode, 'code');
                    const save = (Number(acc.price) * disC) / 100;
                    const actual_val_pre = Number(100 - disC);
                    const current_price = formatPriceValue((Number(acc.price) * actual_val_pre) / 100, acc.showFraction);
                    const displayBasePrice = acc.showFraction === true ? formatPriceValue(acc.price, true) : acc.price;

                    function getRuleConsistencyConfig(accObj, mode, ruleIndex = 0) {
                        if (!accObj || !Array.isArray(accObj.multiConsistencyData)) return null;

                        const matchingItems = accObj.multiConsistencyData.filter(
                            (item) => (item.mode || 'evaluation').toLowerCase() === mode.toLowerCase()
                        );
                        if (matchingItems.length === 0) return null;

                        // Case 1: Multiple objects in multiConsistencyData for this mode
                        if (matchingItems.length > 1) {
                            const item = matchingItems[ruleIndex];
                            if (!item) return null;
                            return {
                                discount: Array.isArray(item.discount) ? item.discount[0] : item.discount,
                                price: Array.isArray(item.price) ? item.price[0] : item.price,
                                placementId: Array.isArray(item.placementId) ? item.placementId[0] : item.placementId
                            };
                        }

                        // Case 2: Single object with arrays or scalars
                        const item = matchingItems[0];
                        if (!item) return null;

                        if (Array.isArray(item.discount)) {
                            if (ruleIndex >= item.discount.length) return null;
                            return {
                                discount: item.discount[ruleIndex],
                                price: Array.isArray(item.price) ? (item.price[ruleIndex] !== undefined ? item.price[ruleIndex] : item.price[0]) : item.price,
                                placementId: Array.isArray(item.placementId) ? (item.placementId[ruleIndex] !== undefined ? item.placementId[ruleIndex] : item.placementId[0]) : item.placementId
                            };
                        }

                        // Scalar discount
                        if (ruleIndex === 0) {
                            return {
                                discount: item.discount,
                                price: Array.isArray(item.price) ? item.price[0] : item.price,
                                placementId: Array.isArray(item.placementId) ? item.placementId[0] : item.placementId
                            };
                        }

                        return null;
                    }

                    const evalConfig = getRuleConsistencyConfig(acc, 'evaluation', 0);
                    const fundedConfig0 = getRuleConsistencyConfig(acc, 'funded', 0);
                    const fundedConfig1 = getRuleConsistencyConfig(acc, 'funded', 1);

                    function makeVariantList(cfg) {
                        const list = [{
                            basePrice: acc.price,
                            showFraction: acc.showFraction,
                            discount: disC,
                            couponCode: couponCodeStr,
                            placementId: acc.placementId
                        }];
                        if (cfg) {
                            list.push({
                                basePrice: cfg.price !== undefined ? cfg.price : acc.price,
                                showFraction: acc.showFraction,
                                discount: disC,
                                couponCode: couponCodeStr,
                                placementId: cfg.placementId || acc.placementId
                            });
                        }
                        return list;
                    }

                    const variantsMap = {
                        evaluation: makeVariantList(evalConfig),
                        funded_0: makeVariantList(fundedConfig0),
                        funded_1: makeVariantList(fundedConfig1),
                        funded: makeVariantList(fundedConfig0)
                    };
                    const variantsJsonAttr = JSON.stringify(variantsMap).replace(/"/g, '&quot;');

                    let colHTML =
                        `<div class="prt-col-grid-v2" data-variants="${variantsJsonAttr}"><div class="prt-card-wrapper" ><div class="prt-card-shadow"></div><div class="prt-card-filpper">`;

                    function renderRowValue(val, rowLabel, accObj, currentMode = 'evaluation', isInline = false, ruleIndex = 0) {
                        const targetConfig = getRuleConsistencyConfig(accObj, currentMode, ruleIndex);

                        if (rowLabel === 'Consistency' && targetConfig) {
                            const opt1 = typeof val === 'number' ? `${val}%` : String(val);
                            const optVal = targetConfig.discount !== undefined
                                ? (typeof targetConfig.discount === 'number' ? `${targetConfig.discount}%` : String(targetConfig.discount))
                                : '50%';
                            const opt2 = optVal.includes('%') ? optVal : `${optVal}%`;
                            const options = [opt1, opt2];

                            const variantKey = currentMode === 'evaluation' ? 'evaluation' : `funded_${ruleIndex}`;

                            return `<div class="consistency-toggle-box">` +
                                options.map((optLabel, idx) => {
                                    return `<button type="button" class="consistency-toggle-opt ${idx === 0 ? 'active' : ''}" onclick="window.switchConsistencyVariant(this, ${idx}, '${variantKey}')">${optLabel}</button>`;
                                }).join('') +
                                `</div>`;
                        }
                        return `<div class="prt-mob-data-v2 ${isInline ? 'inline ' : ''}${String(val).toLowerCase() === 'none' ? 'tdfy-green' : ''}">${val}</div>`;
                    }

                    if (hasEval) {
                        colHTML += `
    <div class="prt-card-faces front eval" aria-hidden="false"><div class="sheen"></div><div class="prt-col-grid-inner-v2 ${isSelected ? 'selected' : ''}">
    <div class="prt-selected-border ${isSelected ? 'active' : ' '}"></div>
    <div class="prt-pp-tag-v2 ${isSelected ? 'active' : ' '}">MOST POPULAR</div>
    
    <div class="ptr-head-v2">
    <img class="ptr-bg-img2" src="https://cdn.prod.website-files.com/679b064a680c614548672a06/6a2a8d2478fab2ff519915e0_pricing-card.webp" alt="background image">
    <img class="ptr-bg-img1" src="https://cdn.prod.website-files.com/679b064a680c614548672a06/6a2bccbb702c15e79d2558b3_price-card-new%20bg.png" alt="background image">
    <div class="ptr-row">
    <div class="prt-col-v2">
    <div class="pt_hdr-v2 sm"><strong class="pt_hdr-big-v2">${acc.name}</strong><span>Evaluation</span></div>
    </div>
    </div>
    <div class="ptr-row">
    <div class="prt-col-v2">
        <div class="prt-inline-v2">
        <div class="new_price_prev-v2 v3" style="${save ? 'display:block;' : 'display:none;'}">
            <div>$${displayBasePrice}</div>
        </div>
        <div class="new_price_current-v2 v3">
            <div>$${current_price}</div>
        </div>
        <div class="ptr_price_tagline">${acc.subscription} payment</div>
        </div>
    </div>
    </div>
    </div>
    <div class="ptr-body">
    `;
                        acc.evaluation.forEach((row, ii) => {
                            const evalLabel = row[0];
                            const evalTooltip = row[2]?.tooltip;
                            const dataHTML = renderRowValue(row[1], evalLabel, acc, 'evaluation', false, 0);
                            colHTML += `
        <div class="ptr-row">
        <div class="prt-col-v2 prt-mob-col">
        <div class="prt-mob-label-v2">${evalLabel} ${evalTooltip
                    ? `<div class="tt_tip_wrp">
        <div class="tt_tip white">?</div>
        <div class="tt_top_box">
        <p class="mb-0">${evalTooltip}</p>
        </div>
        </div>`
                    : ''
                }</div>
        ${dataHTML}
        </div>
        </div>`;
                        });
                        colHTML += `
    </div>
    <div class="ptr-foot-v2">
    ${hasFunded
                ? `
    <div class="ptr-row">
    <div class="prt-col-v2">
    <a href="#" class="flip_card_btn flip-to-back">View Funded Rules</a>
    </div>
    </div>`
                : ''
                }
    <div class="ptr-row">
    <div class="prt-col-v2">
        <a data-onscreen-btnx="" data-react href="${btn_src}/?plan_id=${acc.placementId}" class="tdfy-style-btn w-inline-block tdfy-price-btn price-btn-v3">
        <div class="tdfy-style-outer-border left-br"></div>
        <div class="tdfy-style-outer-border right-br"></div>
        <div class="tdfy-style-border-right tdfy-style-border">
            <div class="tdfy-style-border-light"></div>
        </div>
        <div class="tdfy-style-border-left tdfy-style-border">
            <div class="tdfy-style-border-light"></div>
        </div>
        <div class="tdfy-style-absolute-box">
            <div class="tdfy-style-absolute-glow"></div>
        </div>
        <div class="tdfy-style-btn-box tdfy-price-btn-box">
            <div class="tdfy-style-text">
                <div>Start with ${acc.name}</div>
            </div>
        </div>
    </a>
    </div>
    </div>
    <div class="ptr-row">
    <div class="prt-col-v2 pt-0">
        <div class="price_details_cp_tag v3" style="${save ? 'opacity:1;' : 'opacity:0;'}">
    <div>Save $${formatPriceValue(save, acc.showFraction)} with code ${getDiscountValue(acc.couponCode, 'code')}</div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    `;
                    }

                    if (hasFunded) {
                        colHTML += `
                <div class="prt-card-faces ${hasEval ? 'back' : 'front'} funded" aria-hidden="${hasEval ? 'true' : 'false'}"><div class="sheen"></div><div class="prt-col-grid-inner-v2 ${isSelected ? 'selected' : ''}">
                <div class="prt-selected-border ${isSelected ? 'active' : ' '}"></div>
                <div class="prt-pp-tag-v2 ${isSelected ? 'active' : ' '}">MOST POPULAR</div>
                <div class="ptr-head-v2">
                <img class="ptr-bg-img2" src="https://cdn.prod.website-files.com/679b064a680c614548672a06/6a2a8d2478fab2ff519915e0_pricing-card.webp" alt="background image">
                <img class="ptr-bg-img1" src="https://cdn.prod.website-files.com/679b064a680c614548672a06/6a2bccbb702c15e79d2558b3_price-card-new%20bg.png" alt="background image">
    <div class="ptr-row">
    <div class="prt-col-v2">
    <div class="pt_hdr-v2 sm"><strong class="pt_hdr-big-v2">${acc.name}</strong><span>Funded</span></div>
    </div>
    </div>
    <div class="ptr-row">
    <div class="prt-col-v2">
    <div class="prt-inline-v2">
    <div class="new_price_prev-v2 v3" style="${save ? 'display:block;' : 'display:none;'}">
    <div>$${displayBasePrice}</div>
    </div>
    <div class="new_price_current-v2 v3">
    <div>$${current_price}</div>
    </div>
    <div class="ptr_price_tagline">${acc.subscription} payment</div>
    </div>
    </div>
    </div>
    </div>
    
    <div class="ptr-body">
    `;
                        const fundedKeys = Object.keys(acc.funded);
                        const isTwoRules = fundedKeys.length === 2;
                        const baseRuleKey = fundedKeys[0];

                        if (isTwoRules) {
                            colHTML += `
    <div class="ptr-row">
    <div class="prt-col-v2 prt-mob-col two_rules">
        <div class="prt-mob-label-v2">Chosen Path</div>
        <div class="prt-mob-data-v2 flex">
        <div class="prt-mob-data-v2 inline red">
            <div>Daily</div> 
            <img class="prt-data-img" src="https://cdn.prod.website-files.com/679b064a680c614548672a06/693048df7f661fd1e32a9f2a_image%2010%20(3).png" alt="Daily">
        </div>
        <div class="prt-mob-data-v2 inline blue">
            <div>Flex</div> 
            <img class="prt-data-img" src="https://cdn.prod.website-files.com/679b064a680c614548672a06/693048ecd29ecc9c8f2aed54_image%209%20(1).png" alt="Flex">
        </div>
        </div>
    </div>
    </div>`;
                        }

                        acc.funded[baseRuleKey].forEach((row, ii) => {
                            const label = row[0];
                            const tooltip = row[2]?.tooltip;
                            const tooltipHTML = tooltip ?
                                `<div class="tt_tip_wrp">
        <div class="tt_tip white">?</div>
        <div class="tt_top_box">
            <p class="mb-0">${tooltip}</p>
        </div>
        </div>` :
                                '';

                            let dataHTML = '';
                            if (isTwoRules) {
                                const val1 = row[1];
                                const val2 = acc.funded[fundedKeys[1]][ii][1];
                                const html1 = renderRowValue(val1, label, acc, 'funded', true, 0);
                                const html2 = renderRowValue(val2, label, acc, 'funded', true, 1);
                                dataHTML = `
            <div class="prt-mob-data-v2 flex">
            ${html1}
            ${html2}
            </div>`;
                            } else {
                                dataHTML = renderRowValue(row[1], label, acc, 'funded', false, 0);
                            }

                            colHTML += `
    <div class="ptr-row">
    <div class="prt-col-v2 prt-mob-col ${isTwoRules ? 'two_rules' : ''}">
        <div class="prt-mob-label-v2">${label} ${tooltipHTML}</div>
        ${dataHTML}
    </div>
    </div>`;
                        });
                        colHTML += `
</div>
<div class="ptr-foot-v2"> 
${hasEval
                ? `
<div class="ptr-row">
<div class="prt-col-v2">
<a href="#" class="flip_card_btn flip-to-front">View Evaluation Rules</a>
</div>
</div>`
                : ''
                }
<div class="ptr-row">
<div class="prt-col-v2">
<a data-onscreen-btnx="" data-react href="${btn_src}/?plan_id=${acc.placementId}" class="tdfy-style-btn w-inline-block tdfy-price-btn price-btn-v3">
    <div class="tdfy-style-outer-border left-br"></div>
    <div class="tdfy-style-outer-border right-br"></div>
    <div class="tdfy-style-border-right tdfy-style-border">
        <div class="tdfy-style-border-light"></div>
    </div>
    <div class="tdfy-style-border-left tdfy-style-border">
        <div class="tdfy-style-border-light"></div>
    </div>
    <div class="tdfy-style-absolute-box">
        <div class="tdfy-style-absolute-glow"></div>
    </div>
    <div class="tdfy-style-btn-box tdfy-price-btn-box">
        <div class="tdfy-style-text">
            <div style="${hasEval ? 'display:none;' : 'display:block;'}">Get Funded with ${acc.name}</div>
            <div style="${hasEval ? 'display:block;' : 'display:none;'}">Start Evaluation</div>
        </div>
    </div>
</a>
</div>
</div>
<div class="ptr-row">
<div class="prt-col-v2 pt-0">
    <div class="price_details_cp_tag v3" style="${save ? 'opacity:1;' : 'opacity:0;'}">
<div>Save $${formatPriceValue(save, acc.showFraction)} with code ${getDiscountValue(acc.couponCode, 'code')}</div>
</div>
</div>
</div> 
</div>
</div>
</div>
`;
                    }

                    colHTML += `</div><div class="prt-card-edge"></div></div></div>`;
                    rightHTML += colHTML;
                });

                rightColGridRow.innerHTML = rightHTML;

                class CardFlipper {
                    constructor(wrapper) {
                        this.wrapper = wrapper;
                        this.flipper = wrapper.querySelector('.prt-card-filpper');
                        this.shadow = wrapper.querySelector('.prt-card-shadow');
                        this.edge = wrapper.querySelector('.prt-card-edge');
                        this.front = wrapper.querySelector('.prt-card-faces.front');
                        this.back = wrapper.querySelector('.prt-card-faces.back');
                        this.toBack = wrapper.querySelector('.flip-to-back');
                        this.toFront = wrapper.querySelector('.flip-to-front');

                        this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                        this.MAX_LIFT = 115;
                        this.STIFFNESS = 128;
                        this.DAMPING = 21.25;
                        this.MASS = 1.65;

                        this.angle = 0;
                        this.vel = 0;
                        this.target = 0;
                        this.raf = null;
                        this.last = null;

                        this.step = this.step.bind(this);
                        this.render = this.render.bind(this);

                        this.render();
                    }

                    render() {
                        const rad = (this.angle * Math.PI) / 180;
                        const s = Math.abs(Math.sin(rad));
                        const lift = s * this.MAX_LIFT;

                        if (this.flipper) {
                            this.flipper.style.transform =
                                `translateY(${(-s * 18).toFixed(2)}px) translateZ(${lift.toFixed(2)}px) rotateY(${this.angle.toFixed(2)}deg)`;
                            this.flipper.style.setProperty('--sheen', Math.pow(s, 1.4).toFixed(3));
                            this.flipper.style.setProperty('--sheen-x', (50 + Math.sin(rad) * 70).toFixed(1) + '%');
                        }

                        if (this.shadow) {
                            this.shadow.style.transform =
                                `translateX(-50%) translateY(${(s * 30).toFixed(1)}px) scale(${(1 + s * 0.26).toFixed(3)})`;
                            this.shadow.style.opacity = (0.5 - s * 0.34).toFixed(3);
                        }

                        if (this.edge) {
                            this.edge.style.opacity = (Math.pow(s, 11) * 0.9).toFixed(3);
                        }
                    }

                    step(t) {
                        if (this.last == null) this.last = t;
                        let dt = (t - this.last) / 1000;
                        this.last = t;
                        if (dt > 0.05) dt = 0.05;

                        const sub = 6;
                        const sdt = dt / sub;
                        for (let i = 0; i < sub; i++) {
                            const force = -this.STIFFNESS * (this.angle - this.target) - this.DAMPING * this.vel;
                            this.vel += (force / this.MASS) * sdt;
                            this.angle += this.vel * sdt;
                        }

                        this.render();

                        if (Math.abs(this.angle - this.target) < 0.08 && Math.abs(this.vel) < 0.6) {
                            this.angle = this.target;
                            this.vel = 0;
                            this.render();
                            this.raf = null;
                            this.last = null;
                            return;
                        }
                        this.raf = requestAnimationFrame(this.step);
                    }

                    setFlipped(toBackSide) {
                        this.target = toBackSide ? 180 : 0;

                        if (this.front && this.back && this.toBack && this.toFront) {
                            this.front.setAttribute('aria-hidden', String(toBackSide));
                            this.back.setAttribute('aria-hidden', String(!toBackSide));
                        }

                        if (this.reduced) {
                            this.angle = this.target;
                            this.vel = 0;
                            this.render();
                            return;
                        }
                        if (!this.raf) {
                            this.last = null;
                            this.raf = requestAnimationFrame(this.step);
                        }
                    }
                }

                const flippers = new Map();
                rightColGridRow.querySelectorAll('.prt-card-wrapper').forEach((wrapper) => {
                    flippers.set(wrapper, new CardFlipper(wrapper));
                });

                rightColGridRow.querySelectorAll('.flip-to-back').forEach((btn) => {
                    btn.addEventListener('click', (e) => {
                        e.preventDefault();
                        const wrapper = e.target.closest('.prt-card-wrapper');
                        const flipperObj = flippers.get(wrapper);
                        if (flipperObj) flipperObj.setFlipped(true);
                    });
                });

                rightColGridRow.querySelectorAll('.flip-to-front').forEach((btn) => {
                    btn.addEventListener('click', (e) => {
                        e.preventDefault();
                        const wrapper = e.target.closest('.prt-card-wrapper');
                        const flipperObj = flippers.get(wrapper);
                        if (flipperObj) flipperObj.setFlipped(false);
                    });
                });

                function matchCardHeights() {
                    const wrappers = v3_table.querySelectorAll('.prt-card-wrapper');
                    if (!wrappers.length) return;

                    wrappers.forEach((w) => {
                        w.style.height = '';
                    });

                    let absoluteMax = 0;

                    wrappers.forEach((wrapper) => {
                        const faces = wrapper.querySelectorAll('.prt-card-faces');
                        let wrapperMax = 0;
                        faces.forEach((face) => {
                            const oldPos = face.style.position;
                            const oldHeight = face.style.height;

                            face.style.position = 'relative';
                            face.style.height = 'auto';

                            const h = face.offsetHeight;

                            face.style.position = oldPos;
                            face.style.height = oldHeight;

                            if (h > wrapperMax) wrapperMax = h;
                        });
                        if (wrapperMax > absoluteMax) absoluteMax = wrapperMax;
                    });

                    if (absoluteMax > 0) {
                        wrappers.forEach((wrapper) => {
                            wrapper.style.height = absoluteMax + 'px';
                        });
                    }
                }

                window.addEventListener('resize', matchCardHeights);
                setTimeout(() => {
                    matchCardHeights();
                }, 100);

                const evMsgTab = pr_container.querySelector('.ev_msg');
                if (evMsgTab) {
                    if (!hasEval) {
                        evMsgTab.style.display = 'block';
                    } else {
                        evMsgTab.style.display = 'none';
                    }
                }

                setTimeout(() => {
                    // const url_param = paramCheck();
                    v3_table.classList.add('loaded');

                    const btns = pr_container.querySelectorAll('.tdfy-price-btn');
                    if (btns.length) {
                        btns.forEach((btn) => {
                            const url = new URL(btn.getAttribute("href"));
                            url.searchParams.set("coupon_code", "GEMS");
                            btn.href =
                                typeof window.carryForwardParams === "function"
                                ? window.carryForwardParams(url.href)
                                : url.href;

                            const glow = btn.querySelector('.tdfy-style-absolute-box'),
                                borderLeft = btn.querySelector('.tdfy-style-border-left'),
                                borderRight = btn.querySelector('.tdfy-style-border-right'),
                                btn_txt = btn.querySelector('.tdfy-style-btn-box'),
                                lft_br = btn.querySelector('.tdfy-style-outer-border.left-br'),
                                rt_br = btn.querySelector('.tdfy-style-outer-border.right-br');

                            let x_val = 0;

                            function updateXVal() {
                                const styles = getComputedStyle(btn_txt);
                                x_val = (btn.clientWidth - (parseFloat(styles.paddingLeft) + parseFloat(styles
                                    .paddingRight))) / 2;
                            }
                            updateXVal();
                            glow.style.transform = `translateX(${x_val}px) translateZ(0px)`;
                            borderLeft.style.opacity = 0;
                            borderRight.style.opacity = 1;
                            lft_br.style.opacity = 0;
                            rt_br.style.opacity = 1;

                            let resetTimeout = null,
                                debounceTimer = null;
                            const DEBOUNCE_DELAY = 5,
                                DEBOUNCE_TIME = 1000;

                            function handleMouseMove(e) {
                                const rect = btn.getBoundingClientRect();
                                let x = e.clientX - rect.left;
                                x = Math.max(0, Math.min(x, rect.width));
                                // Normalize 0 → 1
                                const progress = x / rect.width;
                                const glowX = (progress - 0.5) * 2 * x_val;
                                glow.style.transform = `translateX(${glowX}px) translateZ(0)`;
                                borderLeft.style.opacity = Math.max(0, 1 - progress * 2);
                                borderRight.style.opacity = Math.max(0, (progress - 0.5) * 2);
                                lft_br.style.opacity = Math.max(0, 1 - progress * 2);
                                rt_br.style.opacity = Math.max(0, (progress - 0.5) * 2);
                            }

                            // if (url_param != null && url_param.code != null) {
                            //     if (!url_param.isURL) {
                            //         btn.addEventListener('click', (e) => {
                            //             e.preventDefault();
                            //             window.location.href = addRefToUrl(btn.getAttribute('href'), url_param
                            //                 .code);
                            //         });
                            //     } else {
                            //         btn.setAttribute('href', addRefToUrl(btn.getAttribute('href'), url_param.code));
                            //     }
                            // }

                            btn.addEventListener('mousemove', (e) => {
                                updateXVal();
                                if (resetTimeout) {
                                    clearTimeout(resetTimeout);
                                    resetTimeout = null;
                                }
                                if (debounceTimer) return;
                                debounceTimer = setTimeout(() => {
                                    handleMouseMove(e);
                                    debounceTimer = null;
                                }, DEBOUNCE_DELAY);
                            });

                            btn.addEventListener('mouseleave', () => {
                                updateXVal();
                                if (debounceTimer) {
                                    clearTimeout(debounceTimer);
                                    debounceTimer = null;
                                }
                                resetTimeout = setTimeout(() => {
                                    glow.style.transform = `translateX(${x_val}px) translateZ(0)`;
                                    borderLeft.style.opacity = 0;
                                    borderRight.style.opacity = 1;
                                    lft_br.style.opacity = 0;
                                    rt_br.style.opacity = 1;
                                }, DEBOUNCE_TIME);
                            });
                        });
                    }
                }, 300);
                // Initial card slider
                initMobileSlider();
                setTimeout(() => {
                    initMobileSlider();
                }, 300);
            }
        }

        init();
        createTable();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', price_table);
} else {
    price_table();
}
