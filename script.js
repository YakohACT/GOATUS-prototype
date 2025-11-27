document.addEventListener('DOMContentLoaded', () => {
    // 画面要素
    const viewFind = document.getElementById('view-find');
    const viewField = document.getElementById('view-field');
    const viewCategory = document.getElementById('view-category');
    
    // ナビゲーション
    const navFind = document.getElementById('nav-find');
    const navField = document.getElementById('nav-field');
    const navItems = document.querySelectorAll('.nav-item');

    // トリガー要素
    const triggerSearch = document.getElementById('trigger-search'); // みつける画面の検索枠
    const backToFindBtn = document.getElementById('back-to-find');   // カテゴリ画面の戻るボタン
    
    // カテゴリ展開要素
    const btnAO = document.getElementById('btn-a-o');
    const listAO = document.getElementById('list-a-o');
    const iconAO = btnAO.querySelector('i');

    // --- 画面切り替え関数 ---
    function switchTab(targetTab) {
        navItems.forEach(item => item.classList.remove('active'));
        
        // 全画面非表示
        viewFind.classList.add('hidden');
        viewField.classList.add('hidden');
        viewCategory.classList.add('hidden');

        if (targetTab === 'find') {
            viewFind.classList.remove('hidden');
            navFind.classList.add('active');
        } else if (targetTab === 'field') {
            viewField.classList.remove('hidden');
            navField.classList.add('active');
        }
    }

    // --- イベントリスナー設定 ---

    // 1. 下部ナビゲーション
    navFind.addEventListener('click', (e) => { e.preventDefault(); switchTab('find'); });
    navField.addEventListener('click', (e) => { e.preventDefault(); switchTab('field'); });

    // 2. 「みつける」画面の検索ボックスクリック -> カテゴリ画面へ
    triggerSearch.addEventListener('click', () => {
        // 現在の画面を隠してカテゴリ画面を表示
        viewFind.classList.add('hidden');
        viewCategory.classList.remove('hidden');
    });

    // 3. カテゴリ画面の「<」戻るボタン -> 「みつける」画面へ
    backToFindBtn.addEventListener('click', () => {
        viewCategory.classList.add('hidden');
        viewFind.classList.remove('hidden');
    });

    // 4. 「ア〜オ」ボタンクリック -> リスト開閉
    btnAO.addEventListener('click', () => {
        // hiddenクラスをトグル（付け外し）
        if (listAO.classList.contains('hidden')) {
            listAO.classList.remove('hidden');
            // アイコンを上向きに変更
            iconAO.classList.remove('fa-chevron-down');
            iconAO.classList.add('fa-chevron-up');
        } else {
            listAO.classList.add('hidden');
            // アイコンを下向きに戻す
            iconAO.classList.remove('fa-chevron-up');
            iconAO.classList.add('fa-chevron-down');
        }
    });
    
    // その他のナビボタン（装飾のみ）
    navItems.forEach(item => {
        if(item.id !== 'nav-find' && item.id !== 'nav-field') {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
            });
        }
    });
});