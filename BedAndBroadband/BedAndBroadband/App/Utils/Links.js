var Links;
(function (Links) {
    function get(resource, rel) {
        var link = resource.links.filter(function (l) {
            return l.rel === rel;
        })[0];
        return link ? link.href : null;
    }
    Links.get = get;
})(Links || (Links = {}));
