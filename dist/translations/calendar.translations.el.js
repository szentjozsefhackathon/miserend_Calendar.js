/*! Calendar.js v2.10.15 - Greek | (c) Bunoon 2024 | MIT License */
var __TRANSLATION_OPTIONS = {
    "dayHeaderNames": [
        "Δευτ",
        "Τρ",
        "Νυμφεύομαι",
        "Πέμ",
        "Παρ",
        "Σάβ",
        "Ήλιος"
    ],
    "dayNames": [
        "Δευτέρα",
        "Τρίτη",
        "Τετάρτη",
        "Πέμπτη",
        "Παρασκευή",
        "Σάββατο",
        "Κυριακή"
    ],
    "dayNamesAbbreviated": [
        "Δευτ",
        "Τρ",
        "Νυμφεύομαι",
        "Πέμ",
        "Παρ",
        "Σάβ",
        "Ήλιος"
    ],
    "monthNames": [
        "Ιανουάριος",
        "Φεβρουάριος",
        "Μάρτιος",
        "Απρίλιος",
        "Ενδέχεται",
        "Ιούνιος",
        "Ιούλιος",
        "Αύγουστος",
        "Σεπτέμβριος",
        "Οκτώβριος",
        "Νοέμβριος",
        "Δεκέμβριος"
    ],
    "monthNamesAbbreviated": [
        "Ιαν",
        "Φεβ",
        "Αφανίζω",
        "Απρ",
        "Ενδέχεται",
        "Ιούν",
        "Ιουλ",
        "Αύγ",
        "Σεπτ",
        "Οκτ",
        "Νοε",
        "Δεκ"
    ],
    "previousMonthTooltipText": "Προηγούμενος μήνας",
    "nextMonthTooltipText": "Τον επόμενο μήνα",
    "previousDayTooltipText": "Προηγούμενη μέρα",
    "nextDayTooltipText": "Επόμενη μέρα",
    "previousWeekTooltipText": "Προηγούμενη εβδομάδα",
    "nextWeekTooltipText": "Την επόμενη εβδομάδα",
    "addEventTooltipText": "Προσθήκη συμβάντος",
    "closeTooltipText": "Κλείσε",
    "exportEventsTooltipText": "Εκδηλώσεις εξαγωγής",
    "todayTooltipText": "Σήμερα",
    "refreshTooltipText": "Φρεσκάρω",
    "searchTooltipText": "Αναζήτηση",
    "expandDayTooltipText": "Expand Day",
    "viewAllEventsTooltipText": "Προβολή όλων των συμβάντων",
    "viewFullWeekTooltipText": "Προβολή ολόκληρης της εβδομάδας",
    "fromText": "Από:",
    "toText": "Προς την:",
    "isAllDayText": "Είναι Ολοήμερο",
    "titleText": "Τίτλος:",
    "descriptionText": "Περιγραφή:",
    "locationText": "Τοποθεσία:",
    "addText": "Προσθήκη",
    "updateText": "Εκσυγχρονίζω",
    "cancelText": "Ματαίωση",
    "removeEventText": "Αφαιρώ",
    "addEventTitle": "Προσθήκη συμβάντος",
    "editEventTitle": "Επεξεργασία συμβάντος",
    "exportStartFilename": "εξαγωγές_γεγονότων_",
    "fromTimeErrorMessage": "Επιλέξτε μια έγκυρη ώρα \"Από\".",
    "toTimeErrorMessage": "Επιλέξτε μια έγκυρη ώρα «Έως».",
    "toSmallerThanFromErrorMessage": "Επιλέξτε μια ημερομηνία «Έως» που είναι μεγαλύτερη από την ημερομηνία «Από».",
    "titleErrorMessage": "Εισαγάγετε μια τιμή στο πεδίο \"Τίτλος\" (χωρίς κενό χώρο).",
    "stText": "",
    "ndText": "",
    "rdText": "",
    "thText": "",
    "yesText": "Ναί",
    "noText": "Οχι",
    "allDayText": "Ολη μέρα",
    "allEventsText": "Όλες οι εκδηλώσεις",
    "toTimeText": "προς την",
    "confirmEventRemoveTitle": "Επιβεβαιώστε την κατάργηση συμβάντος",
    "confirmEventRemoveMessage": "Η κατάργηση αυτού του συμβάντος δεν μπορεί να αναιρεθεί. ",
    "okText": "Εντάξει",
    "exportEventsTitle": "Εκδηλώσεις εξαγωγής",
    "selectColorsText": "Επιλέξτε Χρώματα",
    "backgroundColorText": "Χρώμα του φόντου:",
    "textColorText": "Χρώμα κειμένου:",
    "borderColorText": "Χρώμα πλαισίου:",
    "searchEventsTitle": "Αναζήτηση συμβάντων",
    "previousText": "Προηγούμενος",
    "nextText": "Επόμενο",
    "matchCaseText": "Υπόθεση αγώνα",
    "repeatsText": "Επαναλαμβάνει:",
    "repeatDaysToExcludeText": "Επαναλάβετε ημέρες για εξαίρεση:",
    "daysToExcludeText": "Ημέρες προς εξαίρεση:",
    "seriesIgnoreDatesText": "Ημερομηνίες παράβλεψης σειράς:",
    "repeatsNever": "Ποτέ",
    "repeatsEveryDayText": "Κάθε μέρα",
    "repeatsEveryWeekText": "Κάθε εβδομάδα",
    "repeatsEvery2WeeksText": "Κάθε 2 Εβδομάδες",
    "repeatsEveryMonthText": "Κάθε μήνα",
    "repeatsEveryYearText": "Κάθε χρόνο",
    "repeatsCustomText": "Εθιμο:",
    "repeatOptionsTitle": "Επιλογές επανάληψης",
    "moreText": "Περισσότερο",
    "includeText": "Περιλαμβάνω:",
    "minimizedTooltipText": "Ελαττώνω",
    "restoreTooltipText": "Επαναφέρω",
    "removeAllEventsInSeriesText": "Κατάργηση όλων των συμβάντων στη σειρά",
    "createdText": "Δημιουργήθηκε:",
    "organizerNameText": "Διοργανωτής:",
    "organizerEmailAddressText": "Διοργανωτής email:",
    "enableFullScreenTooltipText": "Ενεργοποιήστε τη λειτουργία πλήρους οθόνης",
    "disableFullScreenTooltipText": "Απενεργοποιήστε τη λειτουργία πλήρους οθόνης",
    "idText": "ΤΑΥΤΟΤΗΤΑ:",
    "expandMonthTooltipText": "Ανάπτυξη Μήνας",
    "repeatEndsText": "Επανάληψη λήξεων:",
    "noEventsAvailableText": "Δεν υπάρχουν διαθέσιμα συμβάντα.",
    "viewFullWeekText": "Προβολή ολόκληρης της εβδομάδας",
    "noEventsAvailableFullText": "Δεν υπάρχουν διαθέσιμα συμβάντα για προβολή.",
    "clickText": "Κάντε κλικ",
    "hereText": "εδώ",
    "toAddANewEventText": "για να προσθέσετε ένα νέο συμβάν.",
    "weekText": "Εβδομάδα",
    "groupText": "Ομάδα:",
    "configurationTooltipText": "Διαμόρφωση",
    "configurationTitleText": "Διαμόρφωση",
    "groupsText": "Ομάδες",
    "eventNotificationTitle": "Calendar.js",
    "eventNotificationBody": "Η εκδήλωση \"{0}\" ξεκίνησε.",
    "optionsText": "Επιλογές:",
    "startsWithText": "Ξεκινάει με",
    "endsWithText": "Τελειώνει με",
    "containsText": "Περιέχει",
    "displayTabText": "Απεικόνιση",
    "enableAutoRefreshForEventsText": "Ενεργοποίηση αυτόματης ανανέωσης για συμβάντα",
    "enableBrowserNotificationsText": "Ενεργοποίηση ειδοποιήσεων προγράμματος περιήγησης",
    "enableTooltipsText": "Ενεργοποίηση συμβουλών εργαλείων",
    "dayText": "ημέρα",
    "daysText": "ημέρες",
    "hourText": "ώρα",
    "hoursText": "ώρες",
    "minuteText": "λεπτό",
    "minutesText": "λεπτά",
    "enableDragAndDropForEventText": "Ενεργοποίηση μεταφοράς",
    "organizerTabText": "Διοργανωτής",
    "removeEventsTooltipText": "Κατάργηση συμβάντων",
    "confirmEventsRemoveTitle": "Επιβεβαιώστε την κατάργηση συμβάντων",
    "confirmEventsRemoveMessage": "Η κατάργηση αυτών των μη επαναλαμβανόμενων συμβάντων δεν μπορεί να αναιρεθεί. ",
    "eventText": "Εκδήλωση",
    "optionalText": "Προαιρετικός",
    "urlText": "Διεύθυνση URL:",
    "openUrlText": "Ανοίξτε το Url",
    "thisWeekTooltipText": "Αυτή την εβδομάδα",
    "dailyText": "Καθημερινά",
    "weeklyText": "Εβδομαδιαίος",
    "monthlyText": "Μηνιαίο",
    "yearlyText": "Ετήσια",
    "repeatsByCustomSettingsText": "Με προσαρμοσμένες ρυθμίσεις",
    "lastUpdatedText": "Τελευταία ενημέρωση:",
    "advancedText": "Προχωρημένος",
    "copyText": "αντίγραφο",
    "pasteText": "Επικόλληση",
    "duplicateText": "Αντίγραφο",
    "showAlertsText": "Εμφάνιση ειδοποιήσεων",
    "selectDatePlaceholderText": "Επιλέξτε ημερομηνία...",
    "hideDayText": "Ημέρα απόκρυψης",
    "notSearchText": "Όχι (απέναντι)",
    "showHolidaysInTheDisplaysText": "Εμφάνιση αργιών στην κύρια οθόνη και τις γραμμές τίτλου",
    "newEventDefaultTitle": "* Νέο γεγονός",
    "urlErrorMessage": "Εισαγάγετε μια έγκυρη διεύθυνση URL στο πεδίο \"Url\" (ή αφήστε κενό).",
    "searchTextBoxPlaceholder": "Αναζήτηση τίτλου, περιγραφής κ.λπ...",
    "currentMonthTooltipText": "Τρέχων Μήνας",
    "cutText": "Τομή",
    "showMenuTooltipText": "Εμφάνιση μενού",
    "eventTypesText": "Τύποι συμβάντων",
    "lockedText": "Κλειδωμένο:",
    "typeText": "Τύπος:",
    "sideMenuHeaderText": "Calendar.js",
    "sideMenuDaysText": "Ημέρες",
    "visibleDaysText": "Ορατές μέρες",
    "previousYearTooltipText": "Προηγούμενο έτος",
    "nextYearTooltipText": "Του χρόνου",
    "showOnlyWorkingDaysText": "Εμφάνιση μόνο εργάσιμων ημερών",
    "exportFilenamePlaceholderText": "Όνομα (προαιρετικό)",
    "errorText": "Λάθος",
    "exportText": "Εξαγωγή",
    "configurationUpdatedText": "Η διαμόρφωση ενημερώθηκε.",
    "eventAddedText": "Προστέθηκε συμβάν {0}.",
    "eventUpdatedText": "Το συμβάν {0} ενημερώθηκε.",
    "eventRemovedText": "{0} συμβάν καταργήθηκε.",
    "eventsRemovedText": "Καταργήθηκαν {0} συμβάντα.",
    "eventsExportedToText": "Τα συμβάντα εξήχθησαν στο {0}.",
    "eventsPastedText": "Επικολλήθηκαν {0} συμβάντα.",
    "eventsExportedText": "Εξάγονται εκδηλώσεις.",
    "copyToClipboardOnlyText": "Αντιγραφή μόνο στο πρόχειρο",
    "workingDaysText": "Εργάσιμες μέρες",
    "weekendDaysText": "Μέρες Σαββατοκύριακου",
    "showAsBusyText": "Εμφάνιση ως απασχολημένος",
    "selectAllText": "Επιλογή όλων",
    "selectNoneText": "Επιλέξτε Κανένα",
    "importEventsTooltipText": "Εισαγωγή συμβάντων",
    "eventsImportedText": "Εισήχθησαν {0} συμβάντα.",
    "viewFullYearTooltipText": "Προβολή ολόκληρου του έτους",
    "currentYearTooltipText": "Τρέχον έτος",
    "alertOffsetText": "Μετατόπιση ειδοποίησης (λεπτά):",
    "viewFullDayTooltipText": "Προβολή Ολοήμερη",
    "confirmEventUpdateTitle": "Επιβεβαιώστε την Ενημέρωση εκδήλωσης",
    "confirmEventUpdateMessage": "Θα θέλατε να ενημερώσετε την εκδήλωση από αυτό το σημείο και μετά ή ολόκληρη τη σειρά;",
    "forwardText": "Προς τα εμπρός",
    "seriesText": "Σειρά",
    "viewTimelineTooltipText": "Προβολή Χρονολογίου",
    "nextPropertyTooltipText": "Επόμενη ιδιοκτησία",
    "noneText": "(κανένας)",
    "shareText": "Μερίδιο",
    "shareStartFilename": "shared_events_",
    "previousPropertyTooltipText": "Προηγούμενη ιδιοκτησία",
    "jumpToDateTitle": "Μετάβαση στην ημερομηνία",
    "goText": "Πηγαίνω"
};