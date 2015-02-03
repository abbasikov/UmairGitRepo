/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	//config.uiColor = '#AADC6E';
	config.toolbarLocation = 'top';
	config.toolbar = [
	                  { name: 'document', items: [  '-', 'NewPage', 'Preview', '-', 'Templates' ] },
	                  { name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },	                  
	                { name: 'basicstyles', items: [ 'Bold', 'Italic' ] },
	                 { name: 'insert', items: [ 'Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'Iframe' ] },
	                 '',
	                 {name:'insert', items:['PostComment']}
	                
	              ];
	config.extraPlugins = 'postcomment';
	
	
};
