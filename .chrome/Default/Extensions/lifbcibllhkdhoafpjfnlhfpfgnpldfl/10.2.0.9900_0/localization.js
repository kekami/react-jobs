var localization = {
    en: {
        LAUNCH_SKYPE: 'Launch Skype',
        SHARE_ON_SKYPE: 'Share on Skype',
        SHARE_ON_SKYPE_WINDOW_TITLE: 'Share on Skype'
    }
};

// Holds localized user visible display strings
var localizedPhrases;

/**
* The method returns the language used for localization and
* loads the localized resources in that language.
*/
/*eslint no-unused-vars: [2, { "varsIgnorePattern": "loadLocalizedResources" }]*/
function loadLocalizedResources() {
    var chosenLanguage = 'en'; // Default

    // Get the browser language e.g. en-US
    var browserLanguage = navigator.language || navigator.userLanguage;

    // Check if we support the browser language
    if (browserLanguage) {
        var parts = browserLanguage.split('-');
        if (parts.length > 0)
        {
            /* eslint max-depth: [2, 3]*/
            if (browserLanguage === 'zh-TW') {
                chosenLanguage = 'tw';
            }
            else if (browserLanguage === 'pt-BR') {
                chosenLanguage = 'br';
            }
            else if (localization[parts[0]] != null) {
                chosenLanguage = parts[0];
            }
        }
    }

    localizedPhrases = localization[chosenLanguage];
    if (!localizedPhrases)
    {
        chosenLanguage = 'en';
        localizedPhrases = localization[chosenLanguage];
    }

    return chosenLanguage;
}
