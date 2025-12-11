document.addEventListener('DOMContentLoaded', () => {
    // 画面要素
    const viewFind = document.getElementById('view-find');
    const viewField = document.getElementById('view-field');
    const viewCategory = document.getElementById('view-category');
    const viewEvent = document.getElementById('view-event');
    const viewEventDetail = document.getElementById('view-event-detail');
    const viewPlanSelect = document.getElementById('view-plan-select');
    
    // ナビゲーション
    const navFind = document.getElementById('nav-find');
    const navField = document.getElementById('nav-field');
    const navEvent = document.getElementById('nav-event');
    const navItems = document.querySelectorAll('.nav-item');
    const mainNav = document.getElementById('main-nav'); // 下部ナビ全体

    // トリガー要素
    const triggerSearch = document.getElementById('trigger-search');
    const backToFindBtn = document.getElementById('back-to-find');
    
    // イベント詳細遷移関連
    const triggerEventDetail = document.getElementById('trigger-event-detail');
    const btnBackFromDetail = document.getElementById('btn-back-from-detail');
    
    // プラン選択遷移関連
    const btnSupportEvent = document.getElementById('btn-support-event');
    const btnBackFromPlan = document.getElementById('btn-back-from-plan');
    
    // カテゴリ展開要素
    const btnAO = document.getElementById('btn-a-o');
    const listAO = document.getElementById('list-a-o');
    const iconAO = btnAO.querySelector('i');
    
    const btnA1 = document.getElementById('btn-ka-ko');
    const listA1 = document.getElementById('list-ka-ko');
    const iconA1 = btnA1.querySelector('i');
    
    const btnA2 = document.getElementById('btn-sa-so');
    const listA2 = document.getElementById('list-sa-so');
    const iconA2 = btnA2.querySelector('i');
    
    const btnA3 = document.getElementById('btn-ta-to');
    const listA3 = document.getElementById('list-ta-to');
    const iconA3 = btnA3.querySelector('i');
    
    const btnA4 = document.getElementById('btn-na-no');
    const listA4 = document.getElementById('list-na-no');
    const iconA4 = btnA4.querySelector('i');
    
    const btnA5 = document.getElementById('btn-ha-ho');
    const listA5 = document.getElementById('list-ha-ho');
    const iconA5 = btnA5.querySelector('i');
    
    const btnA6 = document.getElementById('btn-ma-mo');
    const listA6 = document.getElementById('list-ma-mo');
    const iconA6 = btnA6.querySelector('i');
    
    const btnA7 = document.getElementById('btn-ya-yo');
    const listA7 = document.getElementById('list-ya-yo');
    const iconA7 = btnA7.querySelector('i');
    
    const btnA8 = document.getElementById('btn-ra-ro');
    const listA8 = document.getElementById('list-ra-ro');
    const iconA8 = btnA8.querySelector('i');
    
    const btnA9 = document.getElementById('btn-wa-n');
    const listA9 = document.getElementById('list-wa-n');
    const iconA9 = btnA9.querySelector('i');
    
    // --- フィールド画面のタブ切り替え ---
    const tabRecommend = document.getElementById('tab-recommend');
    const tabFollowing = document.getElementById('tab-following');
    
    if (tabRecommend && tabFollowing) {
        tabRecommend.addEventListener('click', () => {
            tabRecommend.classList.add('active');
            tabFollowing.classList.remove('active');
        });

        tabFollowing.addEventListener('click', () => {
            tabFollowing.classList.add('active');
            tabRecommend.classList.remove('active');
        });
    }

    //イベント画面のタブ切り替え
    const tabEventRecommend = document.getElementById('tab-event-recommend');
    const tabEventFollowing = document.getElementById('tab-event-following');

    if (tabEventRecommend && tabEventFollowing) {
        tabEventRecommend.addEventListener('click', () => {
            tabEventRecommend.classList.add('active');
            tabEventFollowing.classList.remove('active');
        });

        tabEventFollowing.addEventListener('click', () => {
            tabEventFollowing.classList.add('active');
            tabEventRecommend.classList.remove('active');
        });
    }

    //画面切り替え関数
    function switchTab(targetTab) {
        navItems.forEach(item => item.classList.remove('active'));
        
        // 全画面非表示
        viewFind.classList.add('hidden');
        viewField.classList.add('hidden');
        viewCategory.classList.add('hidden');
        viewEvent.classList.add('hidden');
        if(viewEventDetail) viewEventDetail.classList.add('hidden');
        if(viewPlanSelect) viewPlanSelect.classList.add('hidden');

        // ナビ表示（詳細画面から戻ってきたとき）
        if(mainNav) mainNav.classList.remove('hidden');

        if (targetTab === 'find') {
            viewFind.classList.remove('hidden');
            navFind.classList.add('active');
        } else if (targetTab === 'field') {
            viewField.classList.remove('hidden');
            navField.classList.add('active');
        } else if (targetTab === 'event') {
            viewEvent.classList.remove('hidden');
            navEvent.classList.add('active');
        }
    }

    //イベントリスナー設定

    //下部ナビゲーション
    navFind.addEventListener('click', (e) => { e.preventDefault(); switchTab('find'); });
    navField.addEventListener('click', (e) => { e.preventDefault(); switchTab('field'); });
    navEvent.addEventListener('click', (e) => { e.preventDefault(); switchTab('event'); });

    //検索 -> カテゴリ
    triggerSearch.addEventListener('click', () => {
        viewFind.classList.add('hidden');
        viewCategory.classList.remove('hidden');
    });

    //カテゴリ -> 検索
    backToFindBtn.addEventListener('click', () => {
        viewCategory.classList.add('hidden');
        viewFind.classList.remove('hidden');
    });

    //カテゴリ開閉(ア〜オ)
    btnAO.addEventListener('click', () => {
        if (listAO.classList.contains('hidden')) {
            listAO.classList.remove('hidden');
            iconAO.classList.remove('fa-chevron-down');
            iconAO.classList.add('fa-chevron-up');
        } else {
            listAO.classList.add('hidden');
            iconAO.classList.remove('fa-chevron-up');
            iconAO.classList.add('fa-chevron-down');
        }
    });
    //カテゴリ開閉(カ〜コ)
    btnA1.addEventListener('click', () => {
        if (listA1.classList.contains('hidden')) {
            listA1.classList.remove('hidden');
            iconA1.classList.remove('fa-chevron-down');
            iconA1.classList.add('fa-chevron-up');
        } else {
            listA1.classList.add('hidden');
            iconA1.classList.remove('fa-chevron-up');
            iconA1.classList.add('fa-chevron-down');
        }
    });
    
    //カテゴリ開閉(サ〜ソ)
    btnA2.addEventListener('click', () => {
        if (listA2.classList.contains('hidden')) {
            listA2.classList.remove('hidden');
            iconA2.classList.remove('fa-chevron-down');
            iconA2.classList.add('fa-chevron-up');
        } else {
            listA2.classList.add('hidden');
            iconA2.classList.remove('fa-chevron-up');
            iconA2.classList.add('fa-chevron-down');
        }
    });
    
    //カテゴリ開閉(タ〜ナ)
    btnA3.addEventListener('click', () => {
        if (listA3.classList.contains('hidden')) {
            listA3.classList.remove('hidden');
            iconA3.classList.remove('fa-chevron-down');
            iconA3.classList.add('fa-chevron-up');
        } else {
            listA3.classList.add('hidden');
            iconA3.classList.remove('fa-chevron-up');
            iconA3.classList.add('fa-chevron-down');
        }
    });
    
    //カテゴリ開閉(ナ〜ノ)
    btnA4.addEventListener('click', () => {
        if (listA4.classList.contains('hidden')) {
            listA4.classList.remove('hidden');
            iconA4.classList.remove('fa-chevron-down');
            iconA4.classList.add('fa-chevron-up');
        } else {
            listA4.classList.add('hidden');
            iconA4.classList.remove('fa-chevron-up');
            iconA4.classList.add('fa-chevron-down');
        }
    });
    
    //カテゴリ開閉(ハ〜ホ)
    btnA5.addEventListener('click', () => {
        if (listA5.classList.contains('hidden')) {
            listA5.classList.remove('hidden');
            iconA5.classList.remove('fa-chevron-down');
            iconA5.classList.add('fa-chevron-up');
        } else {
            listA5.classList.add('hidden');
            iconA5.classList.remove('fa-chevron-up');
            iconA5.classList.add('fa-chevron-down');
        }
    });
    
    //カテゴリ開閉(マ〜モ)
    btnA6.addEventListener('click', () => {
        if (listA6.classList.contains('hidden')) {
            listA6.classList.remove('hidden');
            iconA6.classList.remove('fa-chevron-down');
            iconA6.classList.add('fa-chevron-up');
        } else {
            listA6.classList.add('hidden');
            iconA6.classList.remove('fa-chevron-up');
            iconA6.classList.add('fa-chevron-down');
        }
    });
    
    //カテゴリ開閉(ヤ〜ヨ)
    btnA7.addEventListener('click', () => {
        if (listA7.classList.contains('hidden')) {
            listA7.classList.remove('hidden');
            iconA7.classList.remove('fa-chevron-down');
            iconA7.classList.add('fa-chevron-up');
        } else {
            listA7.classList.add('hidden');
            iconA7.classList.remove('fa-chevron-up');
            iconA7.classList.add('fa-chevron-down');
        }
    });
    
    btnA8.addEventListener('click', () => {
        if (listA8.classList.contains('hidden')) {
            listA8.classList.remove('hidden');
            iconA8.classList.remove('fa-chevron-down');
            iconA8.classList.add('fa-chevron-up');
        } else {
            listA8.classList.add('hidden');
            iconA8.classList.remove('fa-chevron-up');
            iconA8.classList.add('fa-chevron-down');
        }
    });
    
    //カテゴリ開閉(ワ〜ン)
    btnA9.addEventListener('click', () => {
        if (listA9.classList.contains('hidden')) {
            listA9.classList.remove('hidden');
            iconA9.classList.remove('fa-chevron-down');
            iconA9.classList.add('fa-chevron-up');
        } else {
            listA9.classList.add('hidden');
            iconA9.classList.remove('fa-chevron-up');
            iconA9.classList.add('fa-chevron-down');
        }
    });


    //イベント一覧 -> 詳細画面への遷移
    if (triggerEventDetail) {
        triggerEventDetail.addEventListener('click', () => {
            viewEvent.classList.add('hidden');       // 一覧を隠す
            viewEventDetail.classList.remove('hidden'); // 詳細を表示
            mainNav.classList.add('hidden');         // 下部ナビを隠す
            window.scrollTo(0, 0); // スクロール位置をリセット
        });
    }

    //詳細画面 -> 一覧へ戻る
    if (btnBackFromDetail) {
        btnBackFromDetail.addEventListener('click', () => {
            viewEventDetail.classList.add('hidden'); // 詳細を隠す
            viewEvent.classList.remove('hidden');    // 一覧を表示
            mainNav.classList.remove('hidden');      // 下部ナビを再表示
        });
    }

    //詳細画面 -> プラン選択画面へ
    if (btnSupportEvent) {
        btnSupportEvent.addEventListener('click', () => {
            viewEventDetail.classList.add('hidden'); // 詳細を隠す
            viewPlanSelect.classList.remove('hidden'); // プラン選択を表示
            window.scrollTo(0, 0);
        });
    }

    //プラン選択画面 -> 詳細画面へ戻る
    if (btnBackFromPlan) {
        btnBackFromPlan.addEventListener('click', () => {
            viewPlanSelect.classList.add('hidden'); // プラン選択を隠す
            viewEventDetail.classList.remove('hidden'); // 詳細を表示
            // ナビは詳細画面でも隠れている仕様なのでhiddenのまま
        });
    }
    
    // その他のナビボタン
    navItems.forEach(item => {
        if(item.id !== 'nav-find' && item.id !== 'nav-field' && item.id !== 'nav-event') {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
            });
        }
    });
});
