var p = new Date(),
            d = new Date(p.getFullYear(), p.getMonth() - 1, p.getDate()),
            d1 = new Date(d.getFullYear(), d.getMonth(), 1),
            d2 = new Date(d.getFullYear(), d.getMonth() + 1, 0);

        // Last 1 Month
        var dateMin = new Date(p.getFullYear(), p.getMonth() - 1, p.getDate());
        var dateMax = new Date();


        vm.selectedRange = {
            dateStart: d1,
            dateEnd: d2,
            dateMin: dateMin,
            dateMax: dateMax,
            selectionCustom: true,
            showTemplate: false,
            fullscreen: false,
            showMonth: false,
            showWeek: false,
            showTime: false,
            showDay: false
        };
        
        
        
