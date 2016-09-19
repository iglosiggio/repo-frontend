export default function() {

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('/packages/:package', (schema, request) => {
    var packageName = request.params.package;

    return {
      package: 'Demo ' + packageName
    };
  });

  this.get('/distributions/:distro/packages', (schema, request) => {
    var distro = request.params.distro;

    var data = {
      'torbellino': [
        {
          package: 'huayra-tpm',
          component: 'non-free',
          archs: ['i386', 'amd64', 'source'],
          version: '2.0.0.117-3'
        },
      ],

      'brisa': [
        {
          package: 'huayra-tpm',
          component: 'non-free',
          archs: ['i386', 'amd64', 'source'],
          version: '2.0.0.116-7'
        },
      ]
    };

    return data[distro];
  });


  this.get('/distributions', () => {
    return [
      {
        Origin: 'Huayra',
        Label: 'huayra-brisa',
        Codename: 'brisa',
        Architectures: 'i386 amd64 source',
        Components: 'main contrib non-free',
        UDebComponents: 'main',
        Description: 'Repositorio Antiguo Estable de Huayra',
      },
      {
        Origin: 'Huayra',
        Label: 'huayra-torbellino',
        Codename: 'torbellino',
        Suite: 'unstable',
        Architectures: 'i386 amd64 source',
        Components: 'main contrib non-free',
        UDebComponents: 'main',
        Description: 'Repositorio EN desarrollo de Huayra',
      },
      {
        Origin: 'Huayra',
        Label: '1.1',
        Codename: '1.1',
        Architectures: 'i386 amd64 source',
        Components: 'main contrib non-free',
        UDebComponents: 'main',
        Description: 'Version 1.1',
      },
    ];
  });
}
