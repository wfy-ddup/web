$.fn.pleaTab = function(s){
      s = $.extend({ eventType: "hover" }, s || {} );
      return this.each(function(){
          var this_chief = $(this);
          // var clickPleaTab = this_chief.find(".plea_menu li");
          var clickPleaTab = this_chief.find(".plea_menu").first().find('.p_m_li');
          clickPleaTab.each(function(index){
              var li_this = $(this);
              // var plea_box = this_chief.find("ol");
              var plea_box = this_chief.find(".plea_main").first().children('ol');
              // var li_thiseq = this_chief.find("ol:eq(" +index+ ")");
              var li_thiseq = plea_box.eq(index);
              switch (s.eventType) {
                  case "hover": {
                      li_this.mouseover(function(){
                         timoutid = setTimeout(function(){
                            li_this.addClass("hover").siblings().removeClass("hover");
                            li_thiseq.removeClass("dn").siblings().addClass("dn");
                         },100);
                      }).mouseout(function(){
                         clearTimeout(timoutid);
                      });
                      break;
                  }
                  case "click": {
                      li_this.click(function(){
                          li_this.addClass("hover").siblings().removeClass("hover");
                          li_thiseq.removeClass("dn").siblings().addClass("dn");
                      });
                      break;
                  }
              }

          });
      });
  };

  $('.plea_box').pleaTab();
