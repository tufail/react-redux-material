export const users = [
    {
        role: "user",
        loginName: "user",
        password: "user",
        access:[
            "DashboardAccess",
            'AboutAccess',
            'GalleryAccess'
        ]
    },
    {
        role: "admin",
        loginName: "admin",
        password: "admin",
        access:[
            "DashboardAccess",
            "HomepageAccess",
            'AboutAccess',
            'GalleryAccess',
            'PrivateAccess',
            'SettingsAccess'
        ]
    }
]
