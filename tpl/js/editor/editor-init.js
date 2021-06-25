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

const editor = new EditorJS({
	holder: "js-editor",
	autofocus: false,
	hideToolbar: true,
	inlineToolbar: ['bold', 'italic', 'hyperlink', 'Marker', 'strikethrough'],
	tools: {

		paragraph: {
			// class: Paragraph, // модуль для тестов и разработки
			config: {
				placeholder: "Нажмите Tab для выбора инструмента",
				inlineToolbar: true
			},
			tunes: ['anyTuneName'],
		},
		list: {
			class: List,
			inlineToolbar: true,
			shortcut: "CMD+SHIFT+L",
			tunes: ['anyTuneName'],
		},
		anyTuneName: {
			class: AlignmentBlockTune,
			config: {
				default: "left",
				blocks: {
					header: 'left',
					list: 'left'
				}
			},
		},
		// Incut: Incut, 	// модуль для тестов и разработки
		hyperlink: {
			class: Hyperlink,
			config: {
				shortcut: 'CMD+L',
				target: '_blank',
				rel: 'nofollow',
				validate: false,
			}
		},
		quote: {
			class: Quote,
			inlineToolbar: true,
			shortcut: 'CMD+SHIFT+O',
			config: {
				quotePlaceholder: 'Текст цитаты',
				captionPlaceholder: 'Автор',
			},
		},
		Marker: {
			class: Marker,
			shortcut: 'CMD+SHIFT+M',
		},
		carousel: {
			class: Carousel,
			config: {
				endpoints: {
					byFile: "/imgload/newImgLoad.php",
				}
			}
		},
		strikethrough: {
			class: Strikethrough,
			shortcut: 'CMD+SHIFT+X',
		},
		// image: Incut,
		image: {
			class: ImageTool,
			config: {
				endpoints: {
					byFile: "/imgload/newImgLoad.php",
					byUrl: "/imgload/newImgLoadURL.php", // доделать
				}
			}
		},
		delimiter: Delimiter,
		linkTool: {
			class: LinkTool,
			config: {
				endpoint: "/imgload/newLinkLoad.php",
			}
		},
		header: {
			class: Header,
			inlineToolbar: true,
			config: {
				placeholder: "Заголовок"
			},
			shortcut: "CMD+SHIFT+H"
		},
		embed: {
			class: Embed,
			inlineToolbar: false,
			config: {
				services: {
					youtube: true
				}
			}
		}
	},
	i18n: {
		/**
		 * @type {I18nDictionary}
		 */
		messages: {
			ui: {
				"blockTunes": {
					"toggler": {
						"Click to tune": "Нажмите, чтобы настроить",
						"or drag to move": "или перетащите"
					},
				},
				"inlineToolbar": {
					"converter": {
						"Convert to": "Конвертировать в"
					}
				},
				"toolbar": {
					"toolbox": {
						"Add": "Добавить"
					}
				}
			},
			toolNames: {
				"Text": "Параграф",
				"Carousel": "Сгруппированные картинки",
				"Image": "Картинка",
				"Heading": "Заголовок",
				"List": "Список",
				"Warning": "Примечание",
				"Checklist": "Чеклист",
				"Quote": "Цитата",
				"Code": "Код",
				"Delimiter": "Разделитель",
				"Raw HTML": "HTML-фрагмент",
				"Table": "Таблица",
				"Link": "Ссылка",
				"Marker": "Маркер",
				"Bold": "Полужирный",
				"Italic": "Курсив",
				"InlineCode": "Моноширинный",
				"Hyperlink": "Ссылка"
			},
			tools: {
				"warning": {
					"Title": "Название",
					"Message": "Сообщение",
				},
				"link": {
					"Add a link": "Вставьте ссылку"
				},
				"stub": {
					"The block can not be displayed correctly.": "Блок не может быть отображен"
				},
				"list": {
					"Ordered": "Нумерованный",
					"Unordered": "Маркированный",
				},
				"image": {
					"With border": "С границей",
					"With background": "C фоном",
					"Stretch image": "Растянуть на ширину",
				},
				"quote": {
					"Left alignment": "По левой стороне",
					"Center alignment": "По центру",
				},
				"hyperlink": {
					"Save": "Сохранить",
					"Select target": "Выбрать target",
					"Select rel": "Выброать rel"
				}
			},
			blockTunes: {
				"delete": {
					"Delete": "Удалить"
				},
				"moveUp": {
					"Move up": "Переместить вверх"
				},
				"moveDown": {
					"Move down": "Переместить вниз"
				},
			},
		}
	},
	onReady: () => {
		if (newData) {
			editor.render(newData);
		}

	},
	onChange: () => {
		// var titleCaption = document.querySelector(".ce-preview");
		// if (!titleCaption) {
		// 	editor.blocks.insert("preview", {
		// 		value: ""
		// 	}, {}, 0, true);
		// }
	}
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

