export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f86fbd69fae7eda7d45722a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-47pmen2v',
                  apiId: '3854bd33-cc3f-48dc-8cf5-75bc116695e2'
                },
                {
                  buildHookId: '5f86fbd69a18ace416c5c129',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-q6n16gxc',
                  apiId: 'f3fc7b7b-49d8-499c-992a-16c6bf02247b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rphuber/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-q6n16gxc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
