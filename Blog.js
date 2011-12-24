Blog.modules = {};

Blog.modules.utils = function(box){
    box.characterEncodeHTML = function(){ console.log('encoding html')};
    box.delay = function(){console.log("I'm waiting!")};


};
Blog.modules.events = function(box){
    box.trigger = new function(){};
    box.bind = new function(){};

};
Blog.modules.services = function(box){
        box.getUsers = function(){}
};

function Blog(){
    var args = Array.prototype.slice.call(arguments),
        callback = args.pop(),
        modules = $.isArray(args)?args:args[0];

    if(!(this instanceof Blog)){
        return new Blog(modules, callback)
    }

    for(var module in modules) {
        Blog.modules[module](this);
    }

    callback(this);
}



