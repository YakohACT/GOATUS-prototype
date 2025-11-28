document.addEventListener('DOMContentLoaded', () => {
    // 画面要素
    const viewFind = document.getElementById('view-find');
    const viewField = document.getElementById('view-field');
    const viewCategory = document.getElementById('view-category');
    const viewEvent = document.getElementById('view-event'); // 新規追加
    
    // ナビゲーション
    const navFind = document.getElementById('nav-find');
    const navField = document.getElementById('nav-field');
    const navEvent = document.getElementById('nav-event'); // 新規追加
    const navItems = document.querySelectorAll('.nav-item');

    // トリガー要素
    const triggerSearch = document.getElementById('trigger-search');
    const backToFindBtn = document.getElementById('back-to-find');
    
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
        viewEvent.classList.add('hidden'); // イベントも隠す

        if (targetTab === 'find') {
            viewFind.classList.remove('hidden');
            navFind.classList.add('active');
        } else if (targetTab === 'field') {
            viewField.classList.remove('hidden');
            navField.classList.add('active');
        } else if (targetTab === 'event') {
            viewEvent.classList.remove('hidden'); // イベント表示
            navEvent.classList.add('active');
        }
    }

    // --- イベントリスナー設定 ---

    // 1. 下部ナビゲーション
    navFind.addEventListener('click', (e) => { e.preventDefault(); switchTab('find'); });
    navField.addEventListener('click', (e) => { e.preventDefault(); switchTab('field'); });
    navEvent.addEventListener('click', (e) => { e.preventDefault(); switchTab('event'); }); // イベント用

    // 2. 検索 -> カテゴリ
    triggerSearch.addEventListener('click', () => {
        viewFind.classList.add('hidden');
        viewCategory.classList.remove('hidden');
    });

    // 3. カテゴリ -> 検索
    backToFindBtn.addEventListener('click', () => {
        viewCategory.classList.add('hidden');
        viewFind.classList.remove('hidden');
    });

    // 4. カテゴリ開閉
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
    
    // その他のナビボタン（装飾のみ）
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
