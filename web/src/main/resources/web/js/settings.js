$(document).ready(function(){function t(t){t.prop("checked")?$('div[data-dependent="'+t.attr("name")+'"]').slideDown("fast"):$('div[data-dependent="'+t.attr("name")+'"]').slideUp("fast")}$('input[type="checkbox"]').change(function(){t($(this))}),$('input[type="checkbox"]').each(function(){t($(this))})})