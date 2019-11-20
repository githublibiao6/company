if(jQuery)( function($) {
$.extend($.fn, {
	contextMenu: function(o, callback) {
		var doc = document, de = doc.documentElement, db = doc.body;
		var mu = $('#' + o.menu);
		var popup = this.popup = function(el, e){
			//Mac_J
			if(o.onPopup!=null)
				o.onPopup(el);
			// Hide context menus that may be showing
			$(".contextMenu").hide().find('ul').hide();
			if( $(el).hasClass('disabled') ) return false;
			// Detect mouse position
			var d = {}, x, y;
			if( self.innerHeight ) {
				d.pageYOffset = self.pageYOffset;
				d.pageXOffset = self.pageXOffset;
				d.innerHeight = self.innerHeight;
				d.innerWidth = self.innerWidth;
			} else if( de && de.clientHeight ) {
				d.pageYOffset = de.scrollTop;
				d.pageXOffset = de.scrollLeft;
				d.innerHeight = de.clientHeight;
				d.innerWidth = de.clientWidth;
			} else if( db ) {
				d.pageYOffset = db.scrollTop;
				d.pageXOffset = db.scrollLeft;
				d.innerHeight = db.clientHeight;
				d.innerWidth = db.clientWidth;
			}
			if(!o.anchor || o.location=='mouse'){
				(e.pageX) ? x = e.pageX : x = e.clientX + d.scrollLeft;
				(e.pageY) ? y = e.pageY : x = e.clientY + d.scrollTop;
			}else if(o.anchor=='el'){
				x = el.position().left;
				y = el.position().top;
			}
			// Show the menu
			$(doc).unbind('click');
			//Mac_J
			function getAbsPoint(p) {
				var x = 0, y = 0;
				if($(p).css('position')=='absolute'){
					x = p.offsetLeft;
					y = p.offsetTop;
				}
				while (p = p.offsetParent) {
					if($(p).css('position')=='absolute'){
						x += p.offsetLeft;
						y += p.offsetTop;
					}
				}
				return { x: x, y: y };
			}
			var cw = de.clientWidth, ch = de.clientHeight;
			var ofs = o.offset || {};
			function adjust(x, y){
				var afs = getAbsPoint(mu.parent()[0]);
				x += -afs.x + ofs.x;
				y += -afs.y + ofs.y;
				var w = mu.width(), h = mu.height();
				if(x + w > cw)
					x = cw - w;
				if(y + h > ch)
					y = ch - h;
				return { top: y, left: x - 4 };
			}
			var fx = adjust(x, y);
			mu.css(fx).fadeIn(o.inSpeed);
			// Hover events
			mu.find('li').mouseover(function() {
				var ec = $(this);
				var oc = ec.parent().find('li');
				oc.removeClass('hover').find('ul').hide();
				var sm = ec.addClass('hover').children('ul');
				if(sm.length > 0){
					if(!sm.attr('width')){
						var w = sm.width();
						sm.width(w);//important!
						sm.attr('width', w);
					}
					sm.show();
					var p = ec.position();
					var y = fx.top + p.top + sm.height() - ch;
					var x = fx.left + p.left + ec.width() + sm.width() - cw;
					//alert(fx.top + '/' + p.top + '/' + ec.height() + '/' + sm.height() + '/' + ch)
					sm.css({ 'top': y>0? -y-1:-1, 'left': x>0? -sm.width():ec.width() });
				}
				return false;
			}).mouseout( function() {
				mu.find('li').removeClass('hover');
				return false;
			});
			// Keyboard
			$(doc).keypress( function(e) {
				switch( e.keyCode ) {
					case 38: // up
						if( mu.find('LI.hover').size() == 0 ) {
							mu.find('LI:last').addClass('hover');
						} else {
							mu.find('LI.hover').removeClass('hover').prevAll('LI:not(.disabled)').eq(0).addClass('hover');
							if( mu.find('LI.hover').size() == 0 ) mu.find('LI:last').addClass('hover');
						}
					break;
					case 40: // down
						if( mu.find('LI.hover').size() == 0 ) {
							mu.find('LI:first').addClass('hover');
						} else {
							mu.find('LI.hover').removeClass('hover').nextAll('LI:not(.disabled)').eq(0).addClass('hover');
							if( mu.find('LI.hover').size() == 0 ) mu.find('LI:first').addClass('hover');
						}
					break;
					case 13: // enter
						mu.find('LI.hover span[action]').trigger('click');
					break;
					case 27: // esc
						$(doc).trigger('click');
					break
				}
			});
			// When items are selected
			mu.find('LI[action]').unbind('click');
			mu.find('LI:not(.disabled)[action]').click( function() {
				$(doc).unbind('click').unbind('keypress');
				$(".contextMenu").hide().find('ul').hide();
				// Callback
				if( callback ) callback( $(this).attr('action'), el, {x: x - ofs.left, y: y - ofs.top, docX: x, docY: y} );
				return false;
			});
			// Hide bindings
			setTimeout( function() { // Delay for Mozilla
				$(doc).click( function() {
					$(doc).unbind('click').unbind('keypress');
					mu.fadeOut(o.outSpeed, o.afterClose || $.noop);
					return false;
				});
			}, 0);
		};
		// Defaults
		if( o.button == undefined ) o.button = 3;//Mac_J, default = right click
		if( o.menu == undefined ) return false;
		if( o.inSpeed == undefined ) o.inSpeed = 150;
		if( o.outSpeed == undefined ) o.outSpeed = 75;
		// 0 needs to be -1 for expected results (no fade)
		if( o.inSpeed == 0 ) o.inSpeed = -1;
		if( o.outSpeed == 0 ) o.outSpeed = -1;
		// Loop each context menu
		$(this).each( function() {
			var el = $(this);
			var offset = $(el).offset();
			// Add contextMenu class
			mu.addClass('contextMenu');
			// Simulate a true right click
			$(this).mousedown( function(e) {
				var evt = e, el = $(this);
				el.mouseup( function(e) {
					$(this).unbind('mouseup');
					if( evt.which == o.button ) {
						popup(el, e);
					}
					return false;
				});
				return false;
			});
			// Disable text selection
			if( $.browser.mozilla ) {
				mu.each( function() { $(this).css({ 'MozUserSelect' : 'none' }); });
			} else if( $.browser.msie ) {
				mu.each( function() { $(this).bind('selectstart.disableTextSelect', function() { return false; }); });
			} else {
				mu.each(function() { $(this).bind('mousedown.disableTextSelect', function() { return false; }); });
			}
			// Disable browser context menu (requires both selectors to work in IE/Safari + FF/Chrome)
			$(el).add('UL.contextMenu').bind('contextmenu', function() { return false; });
		});
		return $(this);
	},
	// Disable context menu items on the fly
	disableContextMenuItems: function(o) {
		if( o == undefined ) {
			// Disable all
			$(this).find('LI').addClass('disabled');
			return( $(this) );
		}
		$(this).each( function() {
			if( o != undefined ) {
				var d = o.split(',');
				for( var i = 0; i < d.length; i++ ) {
					$(this).find('LI[action="' + d[i] + '"]').addClass('disabled');
				}
			}
		});
		return( $(this) );
	},
	// Enable context menu items on the fly
	enableContextMenuItems: function(o) {
		if( o == undefined ) {
			// Enable all
			$(this).find('LI.disabled').removeClass('disabled');
			return( $(this) );
		}
		$(this).each( function() {
			if( o != undefined ) {
				var d = o.split(',');
				for( var i = 0; i < d.length; i++ ) {
					$(this).find('span[action="' + d[i] + '"]').parent().removeClass('disabled');
					
				}
			}
		});
		return( $(this) );
	},
	// Disable context menu(s)
	disableContextMenu: function() {
		$(this).each( function() {
			$(this).addClass('disabled');
		});
		return( $(this) );
	},
	// Enable context menu(s)
	enableContextMenu: function() {
		$(this).each( function() {
			$(this).removeClass('disabled');
		});
		return( $(this) );
	},
	// Destroy context menu(s)
	destroyContextMenu: function() {
		// Destroy specified context menus
		$(this).each( function() {
			// Disable action
			$(this).unbind('mousedown').unbind('mouseup');
		});
		return( $(this) );
	}
});
})(jQuery);
