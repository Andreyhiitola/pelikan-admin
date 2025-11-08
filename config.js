const CONFIG = {
    repos: {
        site: 'Andreyhiitola/pelikan-alakol-site',
        app: 'Andreyhiitola/pelikan-app'
    },
    contentPath: 'content',
    sections: [
        {
            id: 'accommodation',
            name: '🏠 Размещение',
            file: 'accommodation.json',
            repo: 'site',
            description: 'Типы номеров и цены'
        },
        {
            id: 'infrastructure',
            name: '🏗️ Инфраструктура',
            file: 'infrastructure.json',
            repo: 'site',
            description: 'Объекты на территории базы'
        },
        {
            id: 'activities',
            name: '📅 Расписание',
            file: 'activities.json',
            repo: 'site',
            description: 'Расписание мероприятий и активностей'
        },
        {
            id: 'menu',
            name: '🍽️ Меню ресторана',
            file: 'menu.json',
            repo: 'site',
            description: 'Меню столовой и кафе'
        },
        {
            id: 'offers',
            name: '🎉 Акции',
            file: 'offers.json',
            repo: 'site',
            description: 'Специальные предложения и скидки'
        },
        {
            id: 'contacts',
            name: '📞 Контакты',
            file: 'contacts.json',
            repo: 'site',
            description: 'Контактная информация'
        }
    ]
};
