<p align=center><a href="https://arwildo.com/akunter/"><img src="https://raw.githubusercontent.com/arwildo/akunter/master/frontend/src/images/akunter-logo.png" width="32"></img></a></p> 
<p align=center> 
  <img src="https://raw.githubusercontent.com/arwildo/akunter/master/frontend/src/images/akunter.png" width="800">
</p>
<p align=center> 
  <a href="https://arwildo.com/akunter/"><img src="https://arwildo.com/akunter/logo.ico" width="16"></img> Akunter</a>
 </p>

<p style="text-align: justify;">
Full-stack DRRM (Django, React, Redux, MySQL) application to handle accounting and databases of small businesses. 
</p>

### Built With

* [React](https://reactjs.org/) - The JavaScript framework
* [Redux](https://redux.js.org/) - State Management
* [Webpack](https://webpack.js.org/) - Module Bundler
* [Babel](https://babeljs.io/) - Transcompiler
* [Sass](https://sass-lang.com/) - CSS Pre-Processor
* [Tailwind](https://tailwindcss.com/) - CSS framework

### Requirements
* [NPM](https://www.npmjs.com/) - Node Package Manager
* [Python3](https://reactjs.org/) - Programming Language


 Tell Node to use the legacy OpenSSL provider

On Unix-like (Linux, macOS, Git bash, etc.):

export NODE_OPTIONS=--openssl-legacy-provider
On Windows command prompt:

set NODE_OPTIONS=--openssl-legacy-provider
On PowerShell:

$env:NODE_OPTIONS = "--openssl-legacy-provider"
When Node 18 had just become the active LTS options 1 and 2 weren't really available, but for anyone still finding this answer, 3 and 4 should no longer be considered serious options in any way.

### Installing

#### Frontend

1. Clone the repo

```
git clone https://github.com/arwildo/akunter
```

2. Run npm install inside `frontend` directory

```
npm install
```

3. Start the server

```
$env:NODE_OPTIONS = "--openssl-legacy-provider" 
npm run start
```

#### Backend

5. Navigate to `backend` directory

6. Install the requirement packages

```
pip install -r requirements.txt
```

7. Initialize server

python manage.py migrate 


python manage.py createsuperuser
http://127.0.0.1:8000/admin/login/?next=/admin/

7. Start the server

```
python manage.py runserver
```


### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


### Support

<a href="https://www.buymeacoffee.com/Arwildo " target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/white_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
