import React, { useEffect, useRef } from 'react';


// _showPluginEnabledPopup: function(plugin_info) {
//   var popup = jQuery('.plugin-toast');
//   var img = jQuery('.sb-items .sb_plugin_icon img', popup);
//   img.attr('src', img.data('src-path') + plugin_info.system_name + '.png');
//   var txt = Locale.get('Plugin %s was successfully enabled');
//   txt = txt.replace('%s', Locale.get(plugin_info.system_name));
//   jQuery('.sb-items .txt-part .txt', popup).html(txt);
//   if (plugin_info.settings_link) {
//       jQuery('.sb-items .txt-part .btn-link', popup).attr('href', plugin_info.settings_link).show();
//   } else {
//       jQuery('.sb-items .txt-part .btn-link', popup).hide();
//   }
//   popup.addClass('shown');
//   jQuery('.close', popup).click(function() {
//       popup.removeClass('shown')
//   });
// },
// _hidePopupOnClick: function() {
//   jQuery(document).on("click", function(e) {
//       if (jQuery('.plugin-toast.shown').length > 0 && jQuery(e.target).closest('.plugin-toast.shown').length == 0) {
//           jQuery('.plugin-toast.shown').removeClass('shown');
//       }
//   });
// }

function BookingWidget() {
    const widgetContainerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = "//widget.simplybook.it/v2/widget/widget.js";
        script.onload = () => {
            new SimplybookWidget({"widget_type":"button","url":"https:\/\/socreatvie.simplybook.it","theme":"space","theme_settings":{"timeline_hide_unavailable":"1","sb_base_color":"#f72585","hide_past_days":"0","timeline_show_end_time":"0","timeline_modern_display":"as_slots","display_item_mode":"block","body_bg_color":"#ffffff","sb_review_image":"","dark_font_color":"#474747","light_font_color":"#ffffff","btn_color_1":"#ffc2cc","sb_company_label_color":"#ffffff","hide_img_mode":"0","show_sidebar":"1","sb_busy":"#c7b3b3","sb_available":"#d6ebff"},"timeline":"modern","datepicker":"top_calendar","is_rtl":false,"app_config":{"clear_session":1,"allow_switch_to_ada":0,"predefined":[]},"button_title":"Book now","button_background_color":"#f72585","button_text_color":"#ffffff","button_position":"right","button_position_offset":"55%","container_id":"sbw_5z7x8y"});
        };
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
       <div id="sbw_5z7x8y" ref={widgetContainerRef}></div>
    );
}

export default BookingWidget;
