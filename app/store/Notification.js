Ext.define('POS.store.Notification', {
    extend: 'Ext.data.Store',
    model: 'POS.model.Notification',

    remoteSort: true,
    pageSize: 100,

    sorters: [{
        property: 'time',
        direction: 'DESC'
    }],
    
    listeners: {
        'clear': function(store){
            Ext.main.ViewModel.set('notificationCount', 0);
        },
        'load': function(store){
            Ext.main.ViewModel.set('notificationCount', store.count());
        },
        'remove': function(store){
            Ext.main.ViewModel.set('notificationCount', store.count());
        }
    }
});