(function () {
var root = this, exports = {};

// The jade runtime:
var jade = exports.jade=function(exports){Array.isArray||(Array.isArray=function(arr){return"[object Array]"==Object.prototype.toString.call(arr)}),Object.keys||(Object.keys=function(obj){var arr=[];for(var key in obj)obj.hasOwnProperty(key)&&arr.push(key);return arr}),exports.merge=function merge(a,b){var ac=a["class"],bc=b["class"];if(ac||bc)ac=ac||[],bc=bc||[],Array.isArray(ac)||(ac=[ac]),Array.isArray(bc)||(bc=[bc]),ac=ac.filter(nulls),bc=bc.filter(nulls),a["class"]=ac.concat(bc).join(" ");for(var key in b)key!="class"&&(a[key]=b[key]);return a};function nulls(val){return val!=null}return exports.attrs=function attrs(obj,escaped){var buf=[],terse=obj.terse;delete obj.terse;var keys=Object.keys(obj),len=keys.length;if(len){buf.push("");for(var i=0;i<len;++i){var key=keys[i],val=obj[key];"boolean"==typeof val||null==val?val&&(terse?buf.push(key):buf.push(key+'="'+key+'"')):0==key.indexOf("data")&&"string"!=typeof val?buf.push(key+"='"+JSON.stringify(val)+"'"):"class"==key&&Array.isArray(val)?buf.push(key+'="'+exports.escape(val.join(" "))+'"'):escaped&&escaped[key]?buf.push(key+'="'+exports.escape(val)+'"'):buf.push(key+'="'+val+'"')}}return buf.join(" ")},exports.escape=function escape(html){return String(html).replace(/&(?!(\w+|\#\d+);)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},exports.rethrow=function rethrow(err,filename,lineno){if(!filename)throw err;var context=3,str=require("fs").readFileSync(filename,"utf8"),lines=str.split("\n"),start=Math.max(lineno-context,0),end=Math.min(lines.length,lineno+context),context=lines.slice(start,end).map(function(line,i){var curr=i+start+1;return(curr==lineno?"  > ":"    ")+curr+"| "+line}).join("\n");throw err.path=filename,err.message=(filename||"Jade")+":"+lineno+"\n"+context+"\n\n"+err.message,err},exports}({});

// create our folder objects
exports.includes = {};
exports.misc = {};
exports.pages = {};

// body.jade compiled template
exports.body = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<body><div id="updateBar"><p>Update available!</p><button class="primary upgrade">Upgrade</button></div><div id="wrapper"><aside id="menu"><section id="organization"><a href="/" class="settings"><img src="/images/copilot-agent-logo-small.png" alt="Copilot"/></a></section><div class="viewport"><section id="bookmarks"><h1>Rooms</h1><nav></nav><input type="text" placeholder="add a room" id="joinmuc" class="inline"/></section><section id="roster"><h1><a href="/" class="settings">Settings</a></h1><h1>Contacts</h1><ul id="contactrequests"></ul><nav></nav><input type="text" placeholder="add a contact" id="addcontact" class="inline"/></section></div><section id="kaiwaNotice"><img src="/images/copilot-agent-logo-small.png" alt="Kaiwa"/></section></aside><header id="topbar"><div id="connectionStatus"><p>You\'re currently&nbsp;<strong>disconnected</strong></p><button class="primary reconnect">Reconnect</button></div><div id="me"><img class="avatar"/><div><span class="name"></span><span contenteditable="true" spellcheck="false" class="status"></span></div></div></header><main id="pages"></main></div></body>');
    }
    return buf.join("");
};

// head.jade compiled template
exports.head = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/><meta name="apple-mobile-web-app-capable" content="yes"/><link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lato:400,700"/><link rel="stylesheet" type="text/css" href="//dl.dropboxusercontent.com/u/12658312/COPILOT%20AGENT/XMPP/copilotagent.css"/><link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"/>');
    }
    return buf.join("");
};

// bareMessage.jade compiled template
exports.includes.bareMessage = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        var messageClasses = message.classList;
        if (firstEl) {
            messageClasses += " first";
        }
        buf.push("<div" + jade.attrs({
            id: "chat" + message.cid,
            "class": "message" + " " + messageClasses
        }, {
            "class": true,
            id: true
        }) + "><div" + jade.attrs({
            title: messageDate.format("{Dow}, {MM}/{dd}/{yyyy} - {h}:{mm} {Tt}"),
            "class": "date"
        }, {
            title: true
        }) + ">" + jade.escape((jade.interp = messageDate.format("{h}:{mm} {tt}")) == null ? "" : jade.interp) + '</div><p class="body">' + ((jade.interp = message.processedBody) == null ? "" : jade.interp) + "</p>");
        var urls = message.urls;
        buf.push('<section class="embeds">');
        (function() {
            var $$obj = urls;
            if ("number" == typeof $$obj.length) {
                for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
                    var item = $$obj[$index];
                    if (item.source == "body") {
                        buf.push('<section class="embed hidden"><a' + jade.attrs({
                            href: item.href,
                            "class": "source"
                        }, {
                            href: true
                        }) + ">" + jade.escape(null == (jade.interp = item.desc) ? "" : jade.interp) + "</a></section>");
                    } else {
                        buf.push('<section class="embed"><a' + jade.attrs({
                            href: item.href,
                            "class": "source"
                        }, {
                            href: true
                        }) + ">" + jade.escape(null == (jade.interp = item.desc) ? "" : jade.interp) + "</a></section>");
                    }
                }
            } else {
                var $$l = 0;
                for (var $index in $$obj) {
                    $$l++;
                    if ($$obj.hasOwnProperty($index)) {
                        var item = $$obj[$index];
                        if (item.source == "body") {
                            buf.push('<section class="embed hidden"><a' + jade.attrs({
                                href: item.href,
                                "class": "source"
                            }, {
                                href: true
                            }) + ">" + jade.escape(null == (jade.interp = item.desc) ? "" : jade.interp) + "</a></section>");
                        } else {
                            buf.push('<section class="embed"><a' + jade.attrs({
                                href: item.href,
                                "class": "source"
                            }, {
                                href: true
                            }) + ">" + jade.escape(null == (jade.interp = item.desc) ? "" : jade.interp) + "</a></section>");
                        }
                    }
                }
            }
        }).call(this);
        buf.push("</section></div>");
    }
    return buf.join("");
};

// call.jade compiled template
exports.includes.call = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<div class="call"><img class="callerAvatar"/><h1 class="caller"><span class="callerName"></span><span class="callerNumber"></span></h1><h2 class="callTime"></h2><div class="callActions"><button class="answer">Answer</button><button class="ignore">Ignore</button><button class="cancel">Cancel</button><button class="end">End</button><button class="mute">Mute</button><button class="unmute">Unmute</button></div></div>');
    }
    return buf.join("");
};

// contactListItem.jade compiled template
exports.includes.contactListItem = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<li class="contact joined"><div class="wrap"><i class="remove fa fa-times-circle"></i><i class="presence fa fa-circle"></i><div class="user"><img class="avatar"/><span class="name">' + jade.escape(null == (jade.interp = contact.displayName) ? "" : jade.interp) + '</span></div><div class="unread">' + jade.escape(null == (jade.interp = contact.unreadCount) ? "" : jade.interp) + "</div></div></li>");
    }
    return buf.join("");
};

// contactListItemResource.jade compiled template
exports.includes.contactListItemResource = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<li><p class="jid">' + jade.escape(null == (jade.interp = resource.jid) ? "" : jade.interp) + '</p><p class="status">' + jade.escape(null == (jade.interp = resource.status) ? "" : jade.interp) + "</p></li>");
    }
    return buf.join("");
};

// contactRequest.jade compiled template
exports.includes.contactRequest = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<li><div class="jid"></div><div class="response"><button class="primary small approve">Approve</button><button class="secondary small deny">Deny</button></div></li>');
    }
    return buf.join("");
};

// dayDivider.jade compiled template
exports.includes.dayDivider = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<li class="day_divider"><hr/><div class="day_divider_name">' + jade.escape((jade.interp = day_name) == null ? "" : jade.interp) + "</div></li>");
    }
    return buf.join("");
};

// embeds.jade compiled template
exports.includes.embeds = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        if (locals.type === "photo") {
            buf.push('<section class="embed active"><a' + jade.attrs({
                href: locals.original,
                target: "_blank",
                "class": "photo"
            }, {
                href: true,
                target: true
            }) + "><img" + jade.attrs({
                width: locals.width,
                height: locals.height,
                src: locals.url,
                alt: locals.title,
                "class": "embedded"
            }, {
                width: true,
                height: true,
                src: true,
                alt: true
            }) + "/>");
            if (locals.title || locals.description) {
                buf.push('<div class="description">');
                if (locals.title) {
                    buf.push("<h3>" + jade.escape(null == (jade.interp = locals.title) ? "" : jade.interp) + "</h3>");
                }
                if (locals.description) {
                    buf.push("<p>" + jade.escape(null == (jade.interp = locals.description) ? "" : jade.interp) + "</p>");
                }
                buf.push("</div>");
            }
            buf.push("</a></section>");
        } else if (locals.type === "video" && locals.thumbnail_url) {
            buf.push('<section class="embed active"><a' + jade.attrs({
                href: locals.original,
                target: "_blank",
                "class": "preview"
            }, {
                href: true,
                target: true
            }) + "><img" + jade.attrs({
                width: locals.width,
                height: locals.height,
                src: locals.thumbnail_url,
                alt: locals.title,
                "class": "embedded"
            }, {
                width: true,
                height: true,
                src: true,
                alt: true
            }) + "/>");
            if (locals.title || locals.description) {
                buf.push('<div class="description">');
                if (locals.title) {
                    buf.push("<h3>" + jade.escape(null == (jade.interp = locals.title) ? "" : jade.interp) + "</h3>");
                }
                if (locals.description) {
                    buf.push("<p>" + jade.escape(null == (jade.interp = locals.description) ? "" : jade.interp) + "</p>");
                }
                buf.push("</div>");
            }
            buf.push("</a></section>");
        }
    }
    return buf.join("");
};

// ldapUserItem.jade compiled template
exports.includes.ldapUserItem = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<li class="ldapUser"><span class="name"></span><span class="delete fa fa-trash"></span><span class="fa fa-plus"></span><div class="wrap"><span class="inputLabel">Display Name</span><input type="text" class="displayName"/><span class="inputLabel">First Name</span><input type="text" class="givenName"/><span class="inputLabel">Last Name</span><input type="text" class="sn"/><span class="inputLabel">Email</span><input type="text" class="mail"/><button class="primary small changePassword">Change Password</button></div></li>');
    }
    return buf.join("");
};

// message.jade compiled template
exports.includes.message = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<li><div class="message"><span class="timestamp">' + jade.escape(null == (jade.interp = message.timestamp) ? "" : jade.interp) + '</span><p class="body">' + jade.escape(null == (jade.interp = message.body) ? "" : jade.interp) + "</p></div></li>");
    }
    return buf.join("");
};

// messageGroup.jade compiled template
exports.includes.messageGroup = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push("<li></li>");
    }
    return buf.join("");
};

// mucBareMessage.jade compiled template
exports.includes.mucBareMessage = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        var messageClasses = message.classList;
        if (firstEl) {
            messageClasses += " first";
        }
        buf.push("<div" + jade.attrs({
            id: "chat" + message.cid,
            "class": "message" + " " + messageClasses
        }, {
            "class": true,
            id: true
        }) + "><div" + jade.attrs({
            title: messageDate.format("{Dow}, {MM}/{dd}/{yyyy} - {h}:{mm} {Tt}"),
            "class": "date"
        }, {
            title: true
        }) + ">" + jade.escape((jade.interp = messageDate.format("{h}:{mm} {tt}")) == null ? "" : jade.interp) + '</div><p class="body">' + ((jade.interp = message.processedBody) == null ? "" : jade.interp) + "</p>");
        var urls = message.urls;
        buf.push('<section class="embeds">');
        (function() {
            var $$obj = urls;
            if ("number" == typeof $$obj.length) {
                for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
                    var item = $$obj[$index];
                    if (item.source == "body") {
                        buf.push('<section class="embed hidden"><a' + jade.attrs({
                            href: item.href,
                            "class": "source"
                        }, {
                            href: true
                        }) + ">" + jade.escape(null == (jade.interp = item.desc) ? "" : jade.interp) + "</a></section>");
                    } else {
                        buf.push('<section class="embed"><a' + jade.attrs({
                            href: item.href,
                            "class": "source"
                        }, {
                            href: true
                        }) + ">" + jade.escape(null == (jade.interp = item.desc) ? "" : jade.interp) + "</a></section>");
                    }
                }
            } else {
                var $$l = 0;
                for (var $index in $$obj) {
                    $$l++;
                    if ($$obj.hasOwnProperty($index)) {
                        var item = $$obj[$index];
                        if (item.source == "body") {
                            buf.push('<section class="embed hidden"><a' + jade.attrs({
                                href: item.href,
                                "class": "source"
                            }, {
                                href: true
                            }) + ">" + jade.escape(null == (jade.interp = item.desc) ? "" : jade.interp) + "</a></section>");
                        } else {
                            buf.push('<section class="embed"><a' + jade.attrs({
                                href: item.href,
                                "class": "source"
                            }, {
                                href: true
                            }) + ">" + jade.escape(null == (jade.interp = item.desc) ? "" : jade.interp) + "</a></section>");
                        }
                    }
                }
            }
        }).call(this);
        buf.push("</section></div>");
    }
    return buf.join("");
};

// mucListItem.jade compiled template
exports.includes.mucListItem = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<li class="contact"><div class="wrap"><i class="remove fa fa-times-circle"></i><i class="join fa fa-sign-in"></i><div class="unread">' + jade.escape(null == (jade.interp = contact.unreadCount) ? "" : jade.interp) + '</div><span class="name">' + jade.escape(null == (jade.interp = contact.displayName) ? "" : jade.interp) + "</span></div></li>");
    }
    return buf.join("");
};

// mucRosterItem.jade compiled template
exports.includes.mucRosterItem = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<li class="online"><div class="name"></div></li>');
    }
    return buf.join("");
};

// mucWrappedMessage.jade compiled template
exports.includes.mucWrappedMessage = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<li><div class="sender"><a href="#" class="messageAvatar"><img' + jade.attrs({
            src: message.sender.getAvatar(message.from.full),
            alt: message.from.resource,
            "data-placement": "below"
        }, {
            src: true,
            alt: true,
            "data-placement": true
        }) + '/></a></div><div class="messageWrapper"><div class="message_header"><div class="name">' + jade.escape((jade.interp = message.sender.getName(message.from.full)) == null ? "" : jade.interp) + '</div><div class="nickname">' + jade.escape((jade.interp = message.sender.getNickname(message.from.full)) == null ? "" : jade.interp) + "</div><div" + jade.attrs({
            title: messageDate.format("{Dow}, {MM}/{dd}/{yyyy} - {h}:{mm} {Tt}"),
            "class": "date"
        }, {
            title: true
        }) + ">" + jade.escape((jade.interp = messageDate.format("{h}:{mm} {tt}")) == null ? "" : jade.interp) + "</div></div>");
        var messageClasses = message.classList;
        if (firstEl) {
            messageClasses += " first";
        }
        buf.push("<div" + jade.attrs({
            id: "chat" + message.cid,
            "class": "message" + " " + messageClasses
        }, {
            "class": true,
            id: true
        }) + "><div" + jade.attrs({
            title: messageDate.format("{Dow}, {MM}/{dd}/{yyyy} - {h}:{mm} {Tt}"),
            "class": "date"
        }, {
            title: true
        }) + ">" + jade.escape((jade.interp = messageDate.format("{h}:{mm} {tt}")) == null ? "" : jade.interp) + '</div><p class="body">' + ((jade.interp = message.processedBody) == null ? "" : jade.interp) + "</p>");
        var urls = message.urls;
        buf.push('<section class="embeds">');
        (function() {
            var $$obj = urls;
            if ("number" == typeof $$obj.length) {
                for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
                    var item = $$obj[$index];
                    if (item.source == "body") {
                        buf.push('<section class="embed hidden"><a' + jade.attrs({
                            href: item.href,
                            "class": "source"
                        }, {
                            href: true
                        }) + ">" + jade.escape(null == (jade.interp = item.desc) ? "" : jade.interp) + "</a></section>");
                    } else {
                        buf.push('<section class="embed"><a' + jade.attrs({
                            href: item.href,
                            "class": "source"
                        }, {
                            href: true
                        }) + ">" + jade.escape(null == (jade.interp = item.desc) ? "" : jade.interp) + "</a></section>");
                    }
                }
            } else {
                var $$l = 0;
                for (var $index in $$obj) {
                    $$l++;
                    if ($$obj.hasOwnProperty($index)) {
                        var item = $$obj[$index];
                        if (item.source == "body") {
                            buf.push('<section class="embed hidden"><a' + jade.attrs({
                                href: item.href,
                                "class": "source"
                            }, {
                                href: true
                            }) + ">" + jade.escape(null == (jade.interp = item.desc) ? "" : jade.interp) + "</a></section>");
                        } else {
                            buf.push('<section class="embed"><a' + jade.attrs({
                                href: item.href,
                                "class": "source"
                            }, {
                                href: true
                            }) + ">" + jade.escape(null == (jade.interp = item.desc) ? "" : jade.interp) + "</a></section>");
                        }
                    }
                }
            }
        }).call(this);
        buf.push("</section></div></div></li>");
    }
    return buf.join("");
};

// wrappedMessage.jade compiled template
exports.includes.wrappedMessage = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<li><div class="sender"><a href="#" class="messageAvatar"><img' + jade.attrs({
            src: message.sender.avatar,
            alt: message.sender.displayName,
            "data-placement": "below"
        }, {
            src: true,
            alt: true,
            "data-placement": true
        }) + '/></a></div><div class="messageWrapper"><div class="message_header"><div class="name">' + jade.escape((jade.interp = message.sender.displayName) == null ? "" : jade.interp) + "</div><div" + jade.attrs({
            title: messageDate.format("{Dow}, {MM}/{dd}/{yyyy} - {h}:{mm} {Tt}"),
            "class": "date"
        }, {
            title: true
        }) + ">" + jade.escape((jade.interp = messageDate.format("{h}:{mm} {tt}")) == null ? "" : jade.interp) + "</div></div>");
        var messageClasses = message.classList;
        if (firstEl) {
            messageClasses += " first";
        }
        buf.push("<div" + jade.attrs({
            id: "chat" + message.cid,
            "class": "message" + " " + messageClasses
        }, {
            "class": true,
            id: true
        }) + "><div" + jade.attrs({
            title: messageDate.format("{Dow}, {MM}/{dd}/{yyyy} - {h}:{mm} {Tt}"),
            "class": "date"
        }, {
            title: true
        }) + ">" + jade.escape((jade.interp = messageDate.format("{h}:{mm} {tt}")) == null ? "" : jade.interp) + '</div><p class="body">' + ((jade.interp = message.processedBody) == null ? "" : jade.interp) + "</p>");
        var urls = message.urls;
        buf.push('<section class="embeds">');
        (function() {
            var $$obj = urls;
            if ("number" == typeof $$obj.length) {
                for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
                    var item = $$obj[$index];
                    if (item.source == "body") {
                        buf.push('<section class="embed hidden"><a' + jade.attrs({
                            href: item.href,
                            "class": "source"
                        }, {
                            href: true
                        }) + ">" + jade.escape(null == (jade.interp = item.desc) ? "" : jade.interp) + "</a></section>");
                    } else {
                        buf.push('<section class="embed"><a' + jade.attrs({
                            href: item.href,
                            "class": "source"
                        }, {
                            href: true
                        }) + ">" + jade.escape(null == (jade.interp = item.desc) ? "" : jade.interp) + "</a></section>");
                    }
                }
            } else {
                var $$l = 0;
                for (var $index in $$obj) {
                    $$l++;
                    if ($$obj.hasOwnProperty($index)) {
                        var item = $$obj[$index];
                        if (item.source == "body") {
                            buf.push('<section class="embed hidden"><a' + jade.attrs({
                                href: item.href,
                                "class": "source"
                            }, {
                                href: true
                            }) + ">" + jade.escape(null == (jade.interp = item.desc) ? "" : jade.interp) + "</a></section>");
                        } else {
                            buf.push('<section class="embed"><a' + jade.attrs({
                                href: item.href,
                                "class": "source"
                            }, {
                                href: true
                            }) + ">" + jade.escape(null == (jade.interp = item.desc) ? "" : jade.interp) + "</a></section>");
                        }
                    }
                }
            }
        }).call(this);
        buf.push("</section></div></div></li>");
    }
    return buf.join("");
};

// growlMessage.jade compiled template
exports.misc.growlMessage = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<div class="growlMessage">');
        if (icon) {
            buf.push("<img" + jade.attrs({
                src: icon,
                height: "30",
                width: "30"
            }, {
                src: true,
                height: true,
                width: true
            }) + "/>");
        }
        if (title) {
            buf.push("<h1>" + jade.escape(null == (jade.interp = title) ? "" : jade.interp) + "</h1>");
        }
        if (description) {
            buf.push("<p>" + jade.escape(null == (jade.interp = description) ? "" : jade.interp) + "</p>");
        }
        buf.push("</div>");
    }
    return buf.join("");
};

// chat.jade compiled template
exports.pages.chat = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<section class="page chat"><section class="conversation"><header><div class="title"><span class="name"></span><i class="user_presence fa fa-circle"></i><span class="status"></span></div><div class="tzo"></div></header><ul class="messages scroll-container"></ul><div class="activeCall"><div class="container"><video autoplay="autoplay" class="remote"></video><video autoplay="autoplay" muted="muted" class="local"></video><aside class="button-wrap"><button class="accept primary">Accept</button><button class="end secondary">End</button><div class="button-group outlined"><button class="mute">Mute</button><button class="unmute">Unmute</button></div></aside></div></div><div class="chatBox"><div class="contactState"></div><form class="formwrap"><textarea name="chatInput" type="text" placeholder="Send a message..." autocomplete="off"></textarea></form><button class="primary small call">Call</button></div></section></section>');
    }
    return buf.join("");
};

// groupchat.jade compiled template
exports.pages.groupchat = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<section class="page chat"><section class="group conversation"><header class="online"><div class="title"><span class="name"></span><i class="channel_actions fa fa-comments-o"></i><span contenteditable="true" spellcheck="false" class="status"></span></div></header><ul class="messages"></ul><a id="members_toggle"><i class="fa fa-user"></i><span id="members_toggle_count"></span></a><ul class="groupRoster"></ul><div class="chatBox"><ul class="autoComplete"></ul><form class="formwrap"><textarea name="chatInput" type="text" placeholder="Send a message..." autocomplete="off"></textarea></form></div></section></section>');
    }
    return buf.join("");
};

// settings.jade compiled template
exports.pages.settings = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<section class="page main"><h1 id="title">Settings</h1><div id="avatarChanger"><h4>Change Avatar</h4><div class="uploadRegion"><p>Drag and drop a new avatar here</p><img/><form><input id="uploader" type="file"/></form></div></div><div><h4>Desktop Integration</h4><button class="enableAlerts">Enable alerts</button><button class="primary installFirefox">Install app</button><button class="soundNotifs">sound notifications</button></div><div id="ldapSettings"><h4>LDAP settings</h4><ul id="ldapUsers"></ul><input type="text" placeholder="add a ldap user" id="newLdapUser"/></div><div><button class="disconnect">Disconnect</button><button class="primary logout">Logout</button></div></section>');
    }
    return buf.join("");
};

// signin.jade compiled template
exports.pages.signin = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<section class="page signin"><div id="loginForm"><form><label>JID:<input type="text" id="jid" placeholder="you@aweso.me"/></label><label>Password:<input type="password" id="password"/></label><label>WebSocket URL:<input type="text" id="wsURL" placeholder="wss://aweso.me:5281/xmpp-websocket"/></label><input type="submit" value="Connect" class="button primary"/></form></div></section>');
    }
    return buf.join("");
};


// attach to window or export with commonJS
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = exports;
} else if (typeof define === "function" && define.amd) {
    define(exports);
} else {
    root.templatizer = exports;
}

})();