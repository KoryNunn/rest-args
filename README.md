# rest-args

A tiny util for getting all non-named arguments from a function via an arguments object.

# usage:

```javascript
function(foo, bar){
    return restArgs(arguments);
}
```

called with: ```1,2,3,4,5```

will result in ```345```