export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dc7d6bd21788d677ecbb2f8',
                  title: 'Sanity Studio',
                  name: 'snpr-studio',
                  apiId: '6a977e1b-f2f2-460f-97a8-f852221157f3'
                },
                {
                  buildHookId: '5dc7d6bdfa8f79d00910cdae',
                  title: 'Blog Website',
                  name: 'snpr',
                  apiId: '764d7966-4444-4aca-95a9-e3938eeeae36'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vegardsv/snpr',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://snpr.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
