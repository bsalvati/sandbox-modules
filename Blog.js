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
        box.getUsers = function(){console.log('retrieving users!')}
};

function Blog(){
    var args = Array.prototype.slice.call(arguments),
        callback = args.pop(),
        modules = $.isArray(args)?args:args[0],
        i;

    if(!(this instanceof Blog)){
        return new Blog(modules, callback)
    }

    for(i =0; i< modules.length; i+=1){
        Blog.modules[modules[i]](this);
    }

    callback(this);
}



