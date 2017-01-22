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
    title: `article${i}`,
    content: `This is article${i}'s content. This is article${i}'s content. This is article${i}'s content. This is article${i}'s content. This is article${i}'s content. This is article${i}'s content. This is article${i}'s content. This is article${i}'s content. This is article${i}'s content. This is article${i}'s content. This is article${i}'s content. This is article${i}'s content. This is article${i}'s content. This is article${i}'s content. This is article${i}'s content. This is article${i}'s content. This is article${i}'s content. `,
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
