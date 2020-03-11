
export interface Tweets {
    statuses: Status[];
    search_metadata: SearchMetadata;
}
interface Hashtag {
    text: string;
    indices: number[];
}

interface UserMention {
    screen_name: string;
    name: string;
    id: any;
    id_str: string;
    indices: number[];
}

interface Url {
    url: string;
    expanded_url: string;
    display_url: string;
    indices: number[];
}

interface Thumb {
    w: number;
    h: number;
    resize: string;
}

interface Small {
    w: number;
    h: number;
    resize: string;
}

interface Medium2 {
    w: number;
    h: number;
    resize: string;
}

interface Large {
    w: number;
    h: number;
    resize: string;
}

interface Sizes {
    thumb: Thumb;
    small: Small;
    medium: Medium2;
    large: Large;
}

interface Medium {
    id: any;
    id_str: string;
    indices: number[];
    media_url: string;
    media_url_https: string;
    url: string;
    display_url: string;
    expanded_url: string;
    type: string;
    sizes: Sizes;
    source_status_id: any;
    source_status_id_str: string;
    source_user_id: number;
    source_user_id_str: string;
}

interface Entities {
    hashtags: Hashtag[];
    symbols: any[];
    user_mentions: UserMention[];
    urls: Url[];
    media: Medium[];
}

interface Thumb2 {
    w: number;
    h: number;
    resize: string;
}

interface Small2 {
    w: number;
    h: number;
    resize: string;
}

interface Medium4 {
    w: number;
    h: number;
    resize: string;
}

interface Large2 {
    w: number;
    h: number;
    resize: string;
}

interface Sizes2 {
    thumb: Thumb2;
    small: Small2;
    medium: Medium4;
    large: Large2;
}

interface Variant {
    content_type: string;
    url: string;
    bitrate?: number;
}

interface VideoInfo {
    aspect_ratio: number[];
    duration_millis: number;
    variants: Variant[];
}

interface Description {
    urls: any[];
}

interface UserEntities {
    description: Description;
}

interface SourceUser {
    id: number;
    id_str: string;
    name: string;
    screen_name: string;
    location: string;
    description: string;
    url?: any;
    entities: UserEntities;
    protected: boolean;
    followers_count: number;
    friends_count: number;
    listed_count: number;
    created_at: string;
    favourites_count: number;
    utc_offset?: any;
    time_zone?: any;
    geo_enabled: boolean;
    verified: boolean;
    statuses_count: number;
    lang?: any;
    contributors_enabled: boolean;
    is_translator: boolean;
    is_translation_enabled: boolean;
    profile_background_color: string;
    profile_background_image_url?: any;
    profile_background_image_url_https?: any;
    profile_background_tile: boolean;
    profile_image_url: string;
    profile_image_url_https: string;
    profile_banner_url: string;
    profile_link_color: string;
    profile_sidebar_border_color: string;
    profile_sidebar_fill_color: string;
    profile_text_color: string;
    profile_use_background_image: boolean;
    has_extended_profile: boolean;
    default_profile: boolean;
    default_profile_image: boolean;
    following?: any;
    follow_request_sent?: any;
    notifications?: any;
    translator_type: string;
}

interface AdditionalMediaInfo {
    monetizable: boolean;
    source_user: SourceUser;
}

interface Medium3 {
    id: any;
    id_str: string;
    indices: number[];
    media_url: string;
    media_url_https: string;
    url: string;
    display_url: string;
    expanded_url: string;
    type: string;
    sizes: Sizes2;
    source_status_id: any;
    source_status_id_str: string;
    source_user_id: number;
    source_user_id_str: string;
    video_info: VideoInfo;
    additional_media_info: AdditionalMediaInfo;
}

interface ExtendedEntities {
    media: Medium3[];
}

interface Metadata {
    result_type: string;
    iso_language_code: string;
}

interface Url2 {
    url: string;
    expanded_url: string;
    display_url: string;
    indices: number[];
}

interface Description2 {
    urls: Url2[];
}

interface Url4 {
    url: string;
    expanded_url: string;
    display_url: string;
    indices: number[];
}

interface Url3 {
    urls: Url4[];
}

interface Entities3 {
    description: Description2;
    url: Url3;
}

interface User {
    id: any;
    id_str: string;
    name: string;
    screen_name: string;
    location: string;
    description: string;
    url: string;
    entities: Entities3;
    protected: boolean;
    followers_count: number;
    friends_count: number;
    listed_count: number;
    created_at: string;
    favourites_count: number;
    utc_offset?: any;
    time_zone?: any;
    geo_enabled: boolean;
    verified: boolean;
    statuses_count: number;
    lang?: any;
    contributors_enabled: boolean;
    is_translator: boolean;
    is_translation_enabled: boolean;
    profile_background_color: string;
    profile_background_image_url: string;
    profile_background_image_url_https: string;
    profile_background_tile: boolean;
    profile_image_url: string;
    profile_image_url_https: string;
    profile_banner_url: string;
    profile_link_color: string;
    profile_sidebar_border_color: string;
    profile_sidebar_fill_color: string;
    profile_text_color: string;
    profile_use_background_image: boolean;
    has_extended_profile: boolean;
    default_profile: boolean;
    default_profile_image: boolean;
    following?: any;
    follow_request_sent?: any;
    notifications?: any;
    translator_type: string;
}

interface Hashtag2 {
    text: string;
    indices: number[];
}

interface Url5 {
    url: string;
    expanded_url: string;
    display_url: string;
    indices: number[];
}

interface Thumb3 {
    w: number;
    h: number;
    resize: string;
}

interface Small3 {
    w: number;
    h: number;
    resize: string;
}

interface Medium6 {
    w: number;
    h: number;
    resize: string;
}

interface Large3 {
    w: number;
    h: number;
    resize: string;
}

interface Sizes3 {
    thumb: Thumb3;
    small: Small3;
    medium: Medium6;
    large: Large3;
}

interface Medium5 {
    id: any;
    id_str: string;
    indices: number[];
    media_url: string;
    media_url_https: string;
    url: string;
    display_url: string;
    expanded_url: string;
    type: string;
    sizes: Sizes3;
}

interface Entities4 {
    hashtags: Hashtag2[];
    symbols: any[];
    user_mentions: any[];
    urls: Url5[];
    media: Medium5[];
}

interface Thumb4 {
    w: number;
    h: number;
    resize: string;
}

interface Small4 {
    w: number;
    h: number;
    resize: string;
}

interface Medium8 {
    w: number;
    h: number;
    resize: string;
}

interface Large4 {
    w: number;
    h: number;
    resize: string;
}

interface Sizes4 {
    thumb: Thumb4;
    small: Small4;
    medium: Medium8;
    large: Large4;
}

interface Variant2 {
    content_type: string;
    url: string;
    bitrate?: number;
}

interface VideoInfo2 {
    aspect_ratio: number[];
    duration_millis: number;
    variants: Variant2[];
}

interface AdditionalMediaInfo2 {
    monetizable: boolean;
}

interface Medium7 {
    id: any;
    id_str: string;
    indices: number[];
    media_url: string;
    media_url_https: string;
    url: string;
    display_url: string;
    expanded_url: string;
    type: string;
    sizes: Sizes4;
    video_info: VideoInfo2;
    additional_media_info: AdditionalMediaInfo2;
}

interface ExtendedEntities2 {
    media: Medium7[];
}

interface Metadata2 {
    result_type: string;
    iso_language_code: string;
}

interface Description3 {
    urls: any[];
}

interface Entities5 {
    description: Description3;
}

interface User2 {
    id: any;
    id_str: string;
    name: string;
    screen_name: string;
    location: string;
    description: string;
    url?: any;
    entities: Entities5;
    protected: boolean;
    followers_count: number;
    friends_count: number;
    listed_count: number;
    created_at: string;
    favourites_count: number;
    utc_offset?: any;
    time_zone?: any;
    geo_enabled: boolean;
    verified: boolean;
    statuses_count: number;
    lang?: any;
    contributors_enabled: boolean;
    is_translator: boolean;
    is_translation_enabled: boolean;
    profile_background_color: string;
    profile_background_image_url: string;
    profile_background_image_url_https: string;
    profile_background_tile: boolean;
    profile_image_url: string;
    profile_image_url_https: string;
    profile_banner_url: string;
    profile_link_color: string;
    profile_sidebar_border_color: string;
    profile_sidebar_fill_color: string;
    profile_text_color: string;
    profile_use_background_image: boolean;
    has_extended_profile: boolean;
    default_profile: boolean;
    default_profile_image: boolean;
    following?: any;
    follow_request_sent?: any;
    notifications?: any;
    translator_type: string;
}

interface RetweetedStatus {
    created_at: string;
    id: any;
    id_str: string;
    text: string;
    truncated: boolean;
    entities: Entities4;
    extended_entities: ExtendedEntities2;
    metadata: Metadata2;
    source: string;
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
    retweet_count: number;
    favorite_count: number;
    favorited: boolean;
    retweeted: boolean;
    possibly_sensitive: boolean;
    lang: string;
}

interface Hashtag3 {
    text: string;
    indices: number[];
}

interface Url6 {
    url: string;
    expanded_url: string;
    display_url: string;
    indices: number[];
}

interface Entities6 {
    hashtags: Hashtag3[];
    symbols: any[];
    user_mentions: any[];
    urls: Url6[];
}

interface Metadata3 {
    iso_language_code: string;
    result_type: string;
}

interface Description4 {
    urls: any[];
}

interface Entities7 {
    description: Description4;
}

interface User3 {
    id: number;
    id_str: string;
    name: string;
    screen_name: string;
    location: string;
    description: string;
    url?: any;
    entities: Entities7;
    protected: boolean;
    followers_count: number;
    friends_count: number;
    listed_count: number;
    created_at: string;
    favourites_count: number;
    utc_offset?: any;
    time_zone?: any;
    geo_enabled: boolean;
    verified: boolean;
    statuses_count: number;
    lang?: any;
    contributors_enabled: boolean;
    is_translator: boolean;
    is_translation_enabled: boolean;
    profile_background_color: string;
    profile_background_image_url: string;
    profile_background_image_url_https: string;
    profile_background_tile: boolean;
    profile_image_url: string;
    profile_image_url_https: string;
    profile_banner_url: string;
    profile_link_color: string;
    profile_sidebar_border_color: string;
    profile_sidebar_fill_color: string;
    profile_text_color: string;
    profile_use_background_image: boolean;
    has_extended_profile: boolean;
    default_profile: boolean;
    default_profile_image: boolean;
    following?: any;
    follow_request_sent?: any;
    notifications?: any;
    translator_type: string;
}

interface QuotedStatus {
    created_at: string;
    id: number;
    id_str: string;
    text: string;
    truncated: boolean;
    entities: Entities6;
    metadata: Metadata3;
    source: string;
    in_reply_to_status_id?: any;
    in_reply_to_status_id_str?: any;
    in_reply_to_user_id?: any;
    in_reply_to_user_id_str?: any;
    in_reply_to_screen_name?: any;
    user: User3;
    geo?: any;
    coordinates?: any;
    place?: any;
    contributors?: any;
    is_quote_status: boolean;
    retweet_count: number;
    favorite_count: number;
    favorited: boolean;
    retweeted: boolean;
    possibly_sensitive: boolean;
    lang: string;
}

interface Status {
    created_at: string;
    id: any;
    id_str: string;
    text: string;
    truncated: boolean;
    entities: Entities;
    extended_entities: ExtendedEntities;
    metadata: Metadata;
    source: string;
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
    retweet_count: number;
    favorite_count: number;
    favorited: boolean;
    retweeted: boolean;
    possibly_sensitive: boolean;
    lang: string;
    quoted_status_id?: number;
    quoted_status_id_str: string;
    quoted_status: QuotedStatus;
}

interface SearchMetadata {
    completed_in: number;
    max_id: number;
    max_id_str: string;
    next_results: string;
    query: string;
    refresh_url: string;
    count: number;
    since_id: number;
    since_id_str: string;
}