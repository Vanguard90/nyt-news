export interface ITopStories {
    status: string;
    copyright: string;
    section: string;
    last_updated: Date;
    num_results: number;
    results: ITopStory[];
}

export interface ITopStory {
    section: string;
    subsection: string;
    title: string;
    abstract: string;
    url: string;
    byline: string;
    item_type: string;
    updated_date: Date;
    created_date: Date;
    published_date: Date;
    material_type_facet: any;
    kicker: any;
    des_facet: string[];
    org_facet: string[];
    per_facet: string[];
    geo_facet: string[];
    multimedia: ITopStoryMultimedia[];
    short_url: string;
}

interface ITopStoryMultimedia {
    url: string;
    format: string;
    height: number;
    width: number;
    type: string;
    subtype: string;
    caption: string;
    copyright: string;
}