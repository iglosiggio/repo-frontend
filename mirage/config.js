export default function() {

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('/packages/:package', (schema, request) => {
    var packageName = request.params.package;

    let packages = {
      'huayra-tpm': {
        package: 'huayra-tpm',
        versions: [
          {
            version: '2.0.0.116-7',
            distribution: 'brisa',
            archs: ['i386', 'source']
          },
          {
            version: '2.0.0.117-3',
            distribution: 'torbellino',
            archs: ['i386', 'amd64', 'source']
          },
        ]
      }
    };

    return packages[packageName];
  });


  /**
   * Mediante esta ruta se espera un json con los detalles de un paquete
   * dada una distribución y un nombre de paquete.
   *
   * Por ejemplo:
   *
   *    GET /packages/brisa/huayra-tpm
   */
  this.get('/packages/:distro/:packageName', (schema, request) => {
    var distro = request.params.distro;
    var packageName = request.params.packageName;

    var data = {
      torbellino: {
        'huayra-tpm': {
          'version': '2.0.0.117-3',

          'striderURL': 'http://ci.huayragnulinux.com.ar/huayralinux/huayra-curriculum',
          'striderJobURL': 'http://ci.huayragnulinux.com.ar/huayralinux/huayra-curriculum/job/57e2c6cd5c172f2c7a3af1e3',
          'repoURL': 'https://github.com/HuayraLinux/huayra-ritmos',
          'repoPackageURL': 'https://github.com/HuayraLinux/pkg-huayra-ritmos',
          'lastCommitURL': 'https://github.com/HuayraLinux/huayra-ritmos/commit/7140769dccb21d9f71641150cca0dd83ebda00f9',

          'Maintainer': 'Miguel Angel Garcia <miguel.garcia@gmail.com>',
          'InstalledSize': 10368,
          'Depends': ['libnotify4', 'libssl1.0.0', 'libatk1.0-0', 'libpango1.0-0', 'libgtk2.0-0'],
          'Conflicts': ['libtdagent', 'tdagent'],
          'Priority': 'extra',
          'Section': 'non-free/utils',
          'Filename': 'pool/non-free/h/huayra-tpm/huayra-tpm_2.0.0.117-3_amd64.deb',
          'Size': 2763726,
          'SHA256': '4f52437222c9f9dff8c0f9f7aca7a3d2ffa9491e36a64b3fb7ed9f64b19f9402',
          'SHA1': '1fe3aaef37ad61c3f0bd3a7b395ea2e9d4e2594e',
          'MD5sum': 'f83a0e8327b9325d8d0515f0e0110dd4',
          'Description': 'Libraries and Agent of Theft Deterrent',
        }
      },
      brisa: {
        'huayra-tpm': {
          'version': '2.0.0.116-7',

          'striderURL': 'http://ci.huayragnulinux.com.ar/huayralinux/huayra-curriculum',
          'striderJobURL': 'http://ci.huayragnulinux.com.ar/huayralinux/huayra-curriculum/job/57e2c6cd5c172f2c7a3af1e3',
          'repoURL': 'https://github.com/HuayraLinux/huayra-ritmos',
          'repoPackageURL': 'https://github.com/HuayraLinux/pkg-huayra-ritmos',
          'lastCommitURL': 'https://github.com/HuayraLinux/huayra-ritmos/commit/7140769dccb21d9f71641150cca0dd83ebda00f9',

          'Maintainer': 'Miguel Angel Garcia <miguel.garcia@gmail.com>',
          'InstalledSize': 10368,
          'Depends': ['libnotify4', 'libssl1.0.0', 'libatk1.0-0', 'libpango1.0-0', 'libgtk2.0-0'],
          'Conflicts': ['libtdagent', 'tdagent'],
          'Priority': 'extra',
          'Section': 'non-free/utils',
          'Filename': 'pool/non-free/h/huayra-tpm/huayra-tpm_2.0.0.117-3_amd64.deb',
          'Size': 2763726,
          'SHA256': '4f52437222c9f9dff8c0f9f7aca7a3d2ffa9491e36a64b3fb7ed9f64b19f9402',
          'SHA1': '1fe3aaef37ad61c3f0bd3a7b395ea2e9d4e2594e',
          'MD5sum': 'f83a0e8327b9325d8d0515f0e0110dd4',
          'Description': 'Libraries and Agent of Theft Deterrent',
        }
      }
    };

    return data[distro][packageName];
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
    ];
  });
}
