var newData;
var savedDataInput;
var JSONString;
var submitElement;
var detailText = "";

if (!newMaterial && !isJsonError) {
	var submitElement = document.getElementById("updateElement");
	if (!editorData) {
		console.log("Загрузка HTML из старого редактора:");
		var initParseElement = "<div></div>";
		if (edPreviewImgLoaded || edDetailImgLoaded) {
			if (edPreviewImgLoaded && edDetailImgLoaded) {
				var initParseElement = '<div id="edParse">' + edDetail + '<img class="img-preview" data-image-id="' + edPreviewImgID + '" src="' + edPreviewImgSrc + '" alt=""><img class="img-detail" data-image-id="' + edDetailImgID + '" src="' + edDetailImgSrc + '" alt=""></div>';
			} else if (edPreviewImgLoaded) {
				var initParseElement = '<div id="edParse">' + edDetail + '<img class="img-preview" data-image-id="' + edPreviewImgID + '" src="' + edPreviewImgSrc + '" alt=""></div>';
			} else if (edDetailImgLoaded) {
				var initParseElement = '<div id="edParse">' + edDetail + '<img class="img-detail" data-image-id="' + edDetailImgID + '" src="' + edDetailImgSrc + '" alt=""></div>';
			}
		} else {
			var initParseElement = '<div id="edParse">' + edDetail + '</div>';
		}

		newData = mapDOM(initParseElement, false);
		console.log(newData);
	} else {
		console.log("Загружаем данные из Json:");
		var newData = JSON.parse(editorData)
		console.log(newData);
	}
} else {
	if (isJsonError) {
		var submitElement = document.getElementById("updateElement");
		var initParseElement = "<div id='edParse'>" + edDetail + "</div>";
		console.log("isJsonError");
		alert("Ошибка парсинга HTML-материала, редактор может отобразить его неполным или некорректным.");
		newData = mapDOM(initParseElement, false);
	} else {
		var submitElement = document.getElementById("addElement");
		newData = {
			"blocks": [
				{
					"type": "paragraph",
					"data": {
						"text": ""
					}
				}
			],
			"version": "2.19.1"
		};
	}

}

const ImageTool = window.ImageTool;

var editor = new EditorJS({
	/**
	 * Wrapper of Editor
	 */
	holder: 'js-editor',

	/**
	 * Tools list
	 */
	tools: {
		embed: {
			class: Embed,
			inlineToolbar: true,
			tunes: ['alignmentSetting'],
		},
		quote: {
			class: Quote,
			inlineToolbar: true,
			tunes: ['alignmentSetting'],
		},
		table: {
			class: Table,
			inlineToolbar: true,
			tunes: ['alignmentSetting'],
		},
		code: {
			class: CodeTool,
			inlineToolbar: true,
			tunes: ['alignmentSetting'],
		},
		raw: {
			class: RawTool,
			inlineToolbar: true,
			tunes: ['alignmentSetting'],
		},
		checklist: {
			class: Checklist,
			inlineToolbar: true,
			tunes: ['alignmentSetting'],
		},
		list: {
			class: List,
			inlineToolbar: true,
			tunes: ['alignmentSetting'],
		},
		header: {
			class: Header,
			tunes: ['alignmentSetting'],
		},
		delimiter: Delimiter,
		paragraph: {
			class: Paragraph,
			inlineToolbar: false,
			tunes: ['alignmentSetting'],
			config: {
				css: {
					"btnColor": "btn--gray",
				}
			}
		},
		alignmentSetting: {
			class: AlignmentBlockTune,
			config: {
				default: "center",
				blocks: {
					header: 'center',
					list: 'right'
				}
			},
		}
	},

	data: {
		"time": 1617715359615,
		"blocks": [{
			"type": "checklist",
			"data": {
				"items": [{
					"text": "check1",
					"checked": false
				}, {
					"text": "check2",
					"checked": false
				}, {
					"text": "check3",
					"checked": false
				}]
			},
			"tunes": {
				"alignmentSetting": {
					"alignment": "center"
				}
			}
		}, {
			"type": "header",
			"data": {
				"text": "Header",
				"level": 2
			},
			"tunes": {
				"alignmentSetting": {
					"alignment": "left"
				}
			}
		}],
		"version": "2.20.0"
	},
	/**
	 * This Tool will be used as default
	 */
	// initialBlock: 'paragraph',

	/**
	 * Initial Editor data
	 */

	onReady: function() { 
	},
	onChange: function() {
		console.log('something changed');
	},
});

// Сохранить
submitElement.addEventListener("click", () => {
	editor.save().then(savedData => {
		savedDataInput = JSON.stringify(savedData, null, 4);
		detailText = jsonToHtml(savedData);
		jsonData.innerHTML = savedDataInput;
		detail_text.innerHTML = detailText;
	});
});