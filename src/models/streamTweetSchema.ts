import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const StreamTweetSchema = new Schema({
    created_at: {
        type: Date
    },
    id: {
        type: Number
    },
    id_str: {
        type: String
    },
    text: {
        type: String
    },
    display_text_range: {
        type: [
            Number
        ]
    },
    source: {
        type: String
    },
    truncated: {
        type: Boolean
    },
    in_reply_to_status_id: {
        type: "Mixed"
    },
    in_reply_to_status_id_str: {
        type: "Mixed"
    },
    in_reply_to_user_id: {
        type: Number
    },
    in_reply_to_user_id_str: {
        type: String
    },
    in_reply_to_screen_name: {
        type: String
    },
    user: {
        id: {
            type: Number
        },
        id_str: {
            type: String
        },
        name: {
            type: String
        },
        screen_name: {
            type: String
        },
        location: {
            type: "Mixed"
        },
        url: {
            type: String
        },
        description: {
            type: "Mixed"
        },
        translator_type: {
            type: String
        },
        protected: {
            type: Boolean
        },
        verified: {
            type: Boolean
        },
        followers_count: {
            type: Number
        },
        friends_count: {
            type: Number
        },
        listed_count: {
            type: Number
        },
        favourites_count: {
            type: Number
        },
        statuses_count: {
            type: Number
        },
        created_at: {
            type: Date
        },
        utc_offset: {
            type: "Mixed"
        },
        time_zone: {
            type: "Mixed"
        },
        geo_enabled: {
            type: Boolean
        },
        lang: {
            type: "Mixed"
        },
        contributors_enabled: {
            type: Boolean
        },
        is_translator: {
            type: Boolean
        },
        profile_background_color: {
            type: String
        },
        profile_background_image_url: {
            type: String
        },
        profile_background_image_url_https: {
            type: String
        },
        profile_background_tile: {
            type: Boolean
        },
        profile_link_color: {
            type: String
        },
        profile_sidebar_border_color: {
            type: String
        },
        profile_sidebar_fill_color: {
            type: String
        },
        profile_text_color: {
            type: String
        },
        profile_use_background_image: {
            type: Boolean
        },
        profile_image_url: {
            type: String
        },
        profile_image_url_https: {
            type: String
        },
        profile_banner_url: {
            type: String
        },
        default_profile: {
            type: Boolean
        },
        default_profile_image: {
            type: Boolean
        },
        following: {
            type: "Mixed"
        },
        follow_request_sent: {
            type: "Mixed"
        },
        notifications: {
            type: "Mixed"
        }
    },
    geo: {
        type: "Mixed"
    },
    coordinates: {
        type: "Mixed"
    },
    place: {
        type: "Mixed"
    },
    contributors: {
        type: "Mixed"
    },
    is_quote_status: {
        type: Boolean
    },
    extended_tweet: {
        full_text: {
            type: String
        },
        display_text_range: {
            type: [
                Number
            ]
        },
        entities: {
            hashtags: {
                type: [
                    "Mixed"
                ]
            },
            urls: {
                type: Array
            },
            user_mentions: {
                type: [
                    "Mixed"
                ]
            },
            symbols: {
                type: Array
            },
            media: {
                type: [
                    "Mixed"
                ]
            }
        },
        extended_entities: {
            media: {
                type: [
                    "Mixed"
                ]
            }
        }
    },
    quote_count: {
        type: Number
    },
    reply_count: {
        type: Number
    },
    retweet_count: {
        type: Number
    },
    favorite_count: {
        type: Number
    },
    entities: {
        hashtags: {
            type: Array
        },
        urls: {
            type: [
                "Mixed"
            ]
        },
        user_mentions: {
            type: [
                "Mixed"
            ]
        },
        symbols: {
            type: Array
        }
    },
    favorited: {
        type: Boolean
    },
    retweeted: {
        type: Boolean
    },
    possibly_sensitive: {
        type: Boolean
    },
    filter_level: {
        type: String
    },
    lang: {
        type: String
    },
    timestamp_ms: {
        type: String
    }
});