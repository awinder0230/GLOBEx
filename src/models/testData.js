const mongoose = require('mongoose');
const config = require('../../webpack.config');
const dbConfigFile = require('../../config/config');

// const dbConfig = dbConfigFile[process.env.NODE_ENV];
const dbConfig = dbConfigFile.test;

mongoose.connect(`mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`,
  (err) => { if(err) console.error(err);
             console.log('  Successfully connect to MongoDB !'); });

const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};

const articleSchema = mongoose.Schema({
  id: String,
  title: String,
  author: String,
  tags: [],
  location: String,
  content: String,
  popularity: Number,
}, options);

const userSchema = mongoose.Schema({
  id: String,
  name: String,
  account: String,
  password: String,
});

const User = mongoose.model('User', userSchema);
const Article = mongoose.model('Article', articleSchema);

let users = [];
for(let i = 0; i < 50; i++) {
  let user = {
    name: `user${i}`,
    account: `account${i}`,
    password: "12345"
  }
  users.push(user);
}

User.create(users,
  (err, user) => {
    if(err) console.error(err);
    else console.log('  > test users have been saved !');
  }
);

let articles = [];
for(let i = 0; i < 50; i++) {
  let article = {
    title: `The 10 Best Steakhouses in NYC`,
    content: `Kept alive by nearly two centuries of chewing carnivores, the New York City steakhouse defiantly broils on. Classic steakhouses, like Peter Luger and Keens, enjoy a certain amount of stability not common in the current dining climate, where even the most exciting chef-driven small plates tasting counters last about as long as the Edison bulbs that light their communal bathroom foyers. Many of these meat mongers have histories as well marbled as the aged cuts they serve, often extending back into the 19th and early 20th centuries. Taking their cues from the gregarious man-and-meat gatherings known as beefsteak socials, these old guard chophouses almost always feature dark wood and clubby atmospheres, but thanks to this current period of food culture awareness, a modern version of the steakhouse has emerged, where starters and sides are less of an afterthought. Traditional or contemporary, the restaurants on this list all excel in both char and charm. These are the 10 best steakhouses in NYC.`,
    tags: ['tag1', 'tag2', 'tag3'],
    author: `account${i}`,
    location: 'Taipei',
    popularity: `${i}`,
  }
  articles.push(article);
}

Article.create(articles,
  (err, article) => {
    if(err) console.error(err);
    else console.log('  > test articles have been saved !');
  }
);
