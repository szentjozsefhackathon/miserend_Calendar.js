/*! Calendar.js v2.10.13 - Esperanto | (c) Bunoon 2024 | MIT License */
var __TRANSLATION_OPTIONS = {
    "dayHeaderNames": [
        "lun",
        "mar",
        "mer",
        "Thu",
        "ven",
        "Sat",
        "sunon"
    ],
    "dayNames": [
        "lundo",
        "mardon",
        "merkredon",
        "ĵaŭdon",
        "vendredo",
        "sabato",
        "dimanĉo"
    ],
    "dayNamesAbbreviated": [
        "lun",
        "mar",
        "mer",
        "Thu",
        "ven",
        "Sat",
        "sunon"
    ],
    "monthNames": [
        "januaro",
        "februaro",
        "Marto",
        "Aprilo",
        "majo",
        "junio",
        "julio",
        "Aŭgusto",
        "septembro",
        "oktobro",
        "novembro",
        "decembro"
    ],
    "monthNamesAbbreviated": [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "majo",
        "Jun",
        "Jul",
        "Aŭg",
        "Sep",
        "Okt",
        "nov",
        "Dec"
    ],
    "previousMonthTooltipText": "Antaŭa Monato",
    "nextMonthTooltipText": "Venontmonate",
    "previousDayTooltipText": "Antaŭa Tago",
    "nextDayTooltipText": "Venontan Tagon",
    "previousWeekTooltipText": "Antaŭa Semajno",
    "nextWeekTooltipText": "Venontsemajne",
    "addEventTooltipText": "Aldoni Eventon",
    "closeTooltipText": "Fermu",
    "exportEventsTooltipText": "Eksporti Eventojn",
    "todayTooltipText": "Hodiaŭ",
    "refreshTooltipText": "Refreŝigi",
    "searchTooltipText": "Serĉu",
    "expandDayTooltipText": "Vastigi Tagon",
    "viewAllEventsTooltipText": "Rigardu Ĉiuj Eventoj",
    "viewFullWeekTooltipText": "Vidu Plenan Semajnon",
    "fromText": "De:",
    "toText": "Al:",
    "isAllDayText": "Estas Tuttaga",
    "titleText": "Titolo:",
    "descriptionText": "Priskribo:",
    "locationText": "Loko:",
    "addText": "Aldoni",
    "updateText": "Ĝisdatigo",
    "cancelText": "Nuligi",
    "removeEventText": "Forigi",
    "addEventTitle": "Aldoni Eventon",
    "editEventTitle": "Redaktu Eventon",
    "exportStartFilename": "eksportitaj_eventoj_",
    "fromTimeErrorMessage": "Bonvolu elekti validan 'De' tempo.",
    "toTimeErrorMessage": "Bonvolu elekti validan 'Al'-tempon.",
    "toSmallerThanFromErrorMessage": "Bonvolu elekti 'Al' daton kiu estas pli granda ol la 'De' dato.",
    "titleErrorMessage": "Bonvolu enigi valoron en la kampo 'Titolo' (neniu malplena spaco).",
    "stText": "",
    "ndText": "",
    "rdText": "",
    "thText": "",
    "yesText": "Jes",
    "noText": "Ne",
    "allDayText": "Tuta tago",
    "allEventsText": "Ĉiuj Eventoj",
    "toTimeText": "al",
    "confirmEventRemoveTitle": "Konfirmu Eventan Forigon",
    "confirmEventRemoveMessage": "Forigo de ĉi tiu evento ne povas esti malfarita. ",
    "okText": "bone",
    "exportEventsTitle": "Eksporti Eventojn",
    "selectColorsText": "Elektu Kolorojn",
    "backgroundColorText": "Fona Koloro:",
    "textColorText": "Teksta Koloro:",
    "borderColorText": "Borda Koloro:",
    "searchEventsTitle": "Serĉu Eventojn",
    "previousText": "Antaŭa",
    "nextText": "Poste",
    "matchCaseText": "Matĉa Kazo",
    "repeatsText": "Ripetoj:",
    "repeatDaysToExcludeText": "Ripetu Tagojn Por Ekskludi:",
    "daysToExcludeText": "Tagoj Por Ekskludi:",
    "seriesIgnoreDatesText": "Serio Ignoru Datojn:",
    "repeatsNever": "Neniam",
    "repeatsEveryDayText": "Ĉiutage",
    "repeatsEveryWeekText": "Ĉiusemajne",
    "repeatsEvery2WeeksText": "Ĉiujn 2 Semajnojn",
    "repeatsEveryMonthText": "Ĉiu Monato",
    "repeatsEveryYearText": "Ĉiujare",
    "repeatsCustomText": "Propra:",
    "repeatOptionsTitle": "Ripeti Opciojn",
    "moreText": "Pli",
    "includeText": "Inkluzivi:",
    "minimizedTooltipText": "Minimumigi",
    "restoreTooltipText": "Restaŭri",
    "removeAllEventsInSeriesText": "Forigi Ĉiuj Eventoj En Serio",
    "createdText": "Kreita:",
    "organizerNameText": "Organizanto:",
    "organizerEmailAddressText": "Retpoŝto de Organizanto:",
    "enableFullScreenTooltipText": "Enŝaltu Plenekranan Reĝimon",
    "disableFullScreenTooltipText": "Malŝaltu Plenekranan Reĝimon",
    "idText": "ID:",
    "expandMonthTooltipText": "Pligrandigi Monaton",
    "repeatEndsText": "Ripetaj Finoj:",
    "noEventsAvailableText": "Neniuj eventoj haveblaj.",
    "viewFullWeekText": "Vidu Plenan Semajnon",
    "noEventsAvailableFullText": "Ne estas eventoj videblaj.",
    "clickText": "Klaku",
    "hereText": "ĉi tie",
    "toAddANewEventText": "aldoni novan eventon.",
    "weekText": "Semajno",
    "groupText": "Grupo:",
    "configurationTooltipText": "Agordo",
    "configurationTitleText": "Agordo",
    "groupsText": "Grupoj",
    "eventNotificationTitle": "Calendar.js",
    "eventNotificationBody": "La evento '{0}' komenciĝis.",
    "optionsText": "Opcioj:",
    "startsWithText": "Komencas Kun",
    "endsWithText": "Finiĝas Kun",
    "containsText": "Enhavas",
    "displayTabText": "Montru",
    "enableAutoRefreshForEventsText": "Ebligu aŭtomatan refreŝigon por eventoj",
    "enableBrowserNotificationsText": "Ebligu sciigojn de retumilo",
    "enableTooltipsText": "Ebligu konsiletojn",
    "dayText": "tago",
    "daysText": "tagoj",
    "hourText": "horo",
    "hoursText": "horoj",
    "minuteText": "minuto",
    "minutesText": "minutoj",
    "enableDragAndDropForEventText": "Ebligu trenadon",
    "organizerTabText": "Organizanto",
    "removeEventsTooltipText": "Forigi Eventojn",
    "confirmEventsRemoveTitle": "Konfirmu Eventojn Forigon",
    "confirmEventsRemoveMessage": "Forigo de ĉi tiuj ne-ripetantaj eventoj ne povas esti malfarita. ",
    "eventText": "Evento",
    "optionalText": "Laŭvola",
    "urlText": "Url:",
    "openUrlText": "Malfermu URL",
    "thisWeekTooltipText": "Ĉi-semajne",
    "dailyText": "Ĉiutage",
    "weeklyText": "Ĉiusemajne",
    "monthlyText": "Monata",
    "yearlyText": "Ĉiujare",
    "repeatsByCustomSettingsText": "Per Propraj Agordoj",
    "lastUpdatedText": "Laste Ĝisdatigita:",
    "advancedText": "Altnivela",
    "copyText": "Kopiu",
    "pasteText": "Alglui",
    "duplicateText": "Duobligi",
    "showAlertsText": "Montru Atentigojn",
    "selectDatePlaceholderText": "Elektu daton...",
    "hideDayText": "Kaŝi Tagon",
    "notSearchText": "Ne (kontraŭe)",
    "showHolidaysInTheDisplaysText": "Montru feriojn en la ĉefa ekrano kaj titolbretoj",
    "newEventDefaultTitle": "* Nova Evento",
    "urlErrorMessage": "Bonvolu enigi validan URL en la kampo 'Url' (aŭ lasu malplena).",
    "searchTextBoxPlaceholder": "Serĉu titolon, priskribon ktp...",
    "currentMonthTooltipText": "Nuna Monato",
    "cutText": "Tranĉi",
    "showMenuTooltipText": "Montru Menuon",
    "eventTypesText": "Eventaj Tipoj",
    "lockedText": "Ŝlosita:",
    "typeText": "Tipo:",
    "sideMenuHeaderText": "Calendar.js",
    "sideMenuDaysText": "Tagoj",
    "visibleDaysText": "Videblaj Tagoj",
    "previousYearTooltipText": "Antaŭa Jaro",
    "nextYearTooltipText": "Venonta jaro",
    "showOnlyWorkingDaysText": "Montru Nur Labortagojn",
    "exportFilenamePlaceholderText": "Nomo (laŭvola)",
    "errorText": "Eraro",
    "exportText": "Eksporto",
    "configurationUpdatedText": "Agordo ĝisdatigita.",
    "eventAddedText": "{0} evento aldonita.",
    "eventUpdatedText": "{0} evento ĝisdatigita.",
    "eventRemovedText": "{0} evento forigita.",
    "eventsRemovedText": "{0} eventoj forigitaj.",
    "eventsExportedToText": "Eventoj eksportitaj al {0}.",
    "eventsPastedText": "{0} eventoj algluitaj.",
    "eventsExportedText": "Eventoj eksportitaj.",
    "copyToClipboardOnlyText": "Kopiu nur al tondujo",
    "workingDaysText": "Labortagoj",
    "weekendDaysText": "Semajnfinaj Tagoj",
    "showAsBusyText": "Montru Kiel Okupita",
    "selectAllText": "Elekti ĉiujn",
    "selectNoneText": "Elektu Neniun",
    "importEventsTooltipText": "Importi Eventojn",
    "eventsImportedText": "{0} eventoj importitaj.",
    "viewFullYearTooltipText": "Vidi Plenan Jaron",
    "currentYearTooltipText": "Nuna Jaro",
    "alertOffsetText": "Alerta Offset (minutoj):",
    "viewFullDayTooltipText": "Vidi Tutan Tagon",
    "confirmEventUpdateTitle": "Konfirmu Eventan Ĝisdatigon",
    "confirmEventUpdateMessage": "Ĉu vi ŝatus ĝisdatigi la eventon de ĉi tiu punkto antaŭen, aŭ la tutan serion?",
    "forwardText": "Antaŭen",
    "seriesText": "Serio",
    "viewTimelineTooltipText": "Rigardu Templinion",
    "nextPropertyTooltipText": "Sekva Proprieto",
    "noneText": "(neniu)",
    "shareText": "Kunhavigi",
    "shareStartFilename": "komunaj_eventoj_",
    "previousPropertyTooltipText": "Antaŭa Proprieto",
    "jumpToDateTitle": "Saltu al dato",
    "goText": "Iru"
};