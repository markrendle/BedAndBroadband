/// <reference path="../_project.ts"/>

interface ILink {
    rel: string;
    href: string;
}
interface IWithLinks {
    links: ILink[];
}
module Links {
    export function get(resource: IWithLinks, rel: string): string {
        var link = resource.links.filter((l) => l.rel === rel)[0];
        return link ? link.href : null;
    }
}