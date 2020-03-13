export interface StreamItem {
    created_at: string;
    id: number;
    id_str: string;
    text: string;
    source: string;
    truncated: boolean;
    in_reply_to_status_id?: any;
    in_reply_to_status_id_str?: any;
    in_reply_to_user_id?: any;
    in_reply_to_user_id_str?: any;
    in_reply_to_screen_name?: any;
    user: User;
    geo?: any;
    coordinates?: any;
    place?: any;
    contributors?: any;
    retweeted_status: RetweetedStatus;
    is_quote_status: boolean;
    quote_count: number;
    reply_count: number;
    retweet_count: number;
    favorite_count: number;
    entities: Entities3;
    favorited: boolean;
    retweeted: boolean;
    filter_level: string;
    lang: string;
    timestamp_ms: string;
}


interface User {
    id: number;
    id_str: string;
    name: string;
    screen_name: string;
    location?: any;
    url?: any;
    description: string;
    translator_type: string;
    protected: boolean;
    verified: boolean;
    followers_count: number;
    friends_count: number;
    listed_count: number;
    favourites_count: number;
    statuses_count: number;
    created_at: string;
    utc_offset?: any;
    time_zone?: any;
    geo_enabled: boolean;
    lang?: any;
    contributors_enabled: boolean;
    is_translator: boolean;
    profile_background_color: string;
    profile_background_image_url: string;
    profile_background_image_url_https: string;
    profile_background_tile: boolean;
    profile_link_color: string;
    profile_sidebar_border_color: string;
    profile_sidebar_fill_color: string;
    profile_text_color: string;
    profile_use_background_image: boolean;
    profile_image_url: string;
    profile_image_url_https: string;
    profile_banner_url: string;
    default_profile: boolean;
    default_profile_image: boolean;
    following?: any;
    follow_request_sent?: any;
    notifications?: any;
}

interface User2 {
    id: number;
    id_str: string;
    name: string;
    screen_name: string;
    location: string;
    url: string;
    description: string;
    translator_type: string;
    protected: boolean;
    verified: boolean;
    followers_count: number;
    friends_count: number;
    listed_count: number;
    favourites_count: number;
    statuses_count: number;
    created_at: string;
    utc_offset?: any;
    time_zone?: any;
    geo_enabled: boolean;
    lang?: any;
    contributors_enabled: boolean;
    is_translator: boolean;
    profile_background_color: string;
    profile_background_image_url: string;
    profile_background_image_url_https: string;
    profile_background_tile: boolean;
    profile_link_color: string;
    profile_sidebar_border_color: string;
    profile_sidebar_fill_color: string;
    profile_text_color: string;
    profile_use_background_image: boolean;
    profile_image_url: string;
    profile_image_url_https: string;
    profile_banner_url: string;
    default_profile: boolean;
    default_profile_image: boolean;
    following?: any;
    follow_request_sent?: any;
    notifications?: any;
}

interface Hashtag {
    text: string;
    indices: number[];
}

interface Entities {
    hashtags: Hashtag[];
    urls: any[];
    user_mentions: any[];
    symbols: any[];
}

interface ExtendedTweet {
    full_text: string;
    display_text_range: number[];
    entities: Entities;
}

interface Hashtag2 {
    text: string;
    indices: number[];
}

interface Url {
    url: string;
    expanded_url: string;
    display_url: string;
    indices: number[];
}

interface Entities2 {
    hashtags: Hashtag2[];
    urls: Url[];
    user_mentions: any[];
    symbols: any[];
}

interface RetweetedStatus {
    created_at: string;
    id: number;
    id_str: string;
    text: string;
    source: string;
    truncated: boolean;
    in_reply_to_status_id?: any;
    in_reply_to_status_id_str?: any;
    in_reply_to_user_id?: any;
    in_reply_to_user_id_str?: any;
    in_reply_to_screen_name?: any;
    user: User2;
    geo?: any;
    coordinates?: any;
    place?: any;
    contributors?: any;
    is_quote_status: boolean;
    extended_tweet: ExtendedTweet;
    quote_count: number;
    reply_count: number;
    retweet_count: number;
    favorite_count: number;
    entities: Entities2;
    favorited: boolean;
    retweeted: boolean;
    filter_level: string;
    lang: string;
}

interface Hashtag3 {
    text: string;
    indices: number[];
}

interface UserMention {
    screen_name: string;
    name: string;
    id: number;
    id_str: string;
    indices: number[];
}

interface Entities3 {
    hashtags: Hashtag3[];
    urls: any[];
    user_mentions: UserMention[];
    symbols: any[];
}