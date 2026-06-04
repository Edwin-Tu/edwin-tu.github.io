const ghpages = require('gh-pages');

ghpages.publish(
  'dist',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/Edwin-Tu/edwin-tu.github.io.git',
    message: 'deploy: update GitHub Pages',
    dotfiles: true,
  },
  function (err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.log('Deploy complete');
  }
);