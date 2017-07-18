---
title: Setup
slug: setup
date: 2017-07-17
---

- Local Setup
- Domain
- Hosting
- Server Setup
- Deployment
- Rules



## Login as root

*   https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-14-04
* apt-get update
* apt-get upgrade
* adduser demo
* gpasswd -a demo sudo
* nano /etc/ssh/sshd_config
*   PermitRootLogin no
*   Port 22511
* service ssh restart
*   Login as user, if works, logout as root

* sudo apt-get install -y build-essential software-properties-common git nginx unattended-upgrades curl apt-transport-https ufw postfix
* curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
* sudo apt-get update && apt-get install -y nodejs
*   https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions
* curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
* echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
* sudo apt-get update && sudo apt-get -y install yarn
*   https://yarnpkg.com/lang/en/docs/install/#linux-tab
* sudo add-apt-repository ppa:certbot/certbot
* sudo apt-get update && sudo apt-get -y install certbot
* node -v && npm -v && yarn --version && certbot --version

*   https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#platform-linux
* cd && mkdir .ssh && cd .ssh
* ssh-keygen -t rsa -b 4096 -C "contact@mustardamus.com"
* eval "$(ssh-agent -s)"
* ssh-add id_rsa
* cat id_rsa.pub
*   https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/#platform-linux

* cd && mkdir projects && cd projects
* git clone https://github.com/mustardamus/enkrateia.me.git
* cd enkrateia.me
* yarn

* sudo yarn global add pm2
* pm2 start npm --name enkrateia.me -- start
* pm2 save
* pm2 startup

* sudo service nginx stop
* sudo certbot certonly --standalone -d enkrateia.me -d www.enkrateia.me
* sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048
* sudo nano /etc/nginx/sites-available/enkrateia.me
*   server {
        listen 443 ssl;
        server_name enkrateia.me www.enkrateia.me;

        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }

        ssl_certificate /etc/letsencrypt/live/enkrateia.me/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/enkrateia.me/privkey.pem;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;
        ssl_dhparam /etc/ssl/certs/dhparam.pem;
        ssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:AES:CAMELLIA:DES-CBC3-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!aECDH:!EDH-DSS-DES-CBC3-SHA:!EDH-RSA-DES-CBC3-SHA:!KRB5-DES-CBC3-SHA';
        ssl_session_timeout 1d;
        ssl_session_cache shared:SSL:50m;
        ssl_stapling on;
        ssl_stapling_verify on;
        add_header Strict-Transport-Security max-age=15768000;
    }

    server {
        listen 80;
        server_name enkrateia.me www.enkrateia.me;
        return 301 https://$host$request_uri;
    }
* sudo nginx -t
* sudo service nginx start
* curl https://enkrateia.me

* sudo nano /etc/postfix/virtual
*   me@enkrateia.me zenf@posteo.de
* sudo nano /etc/postfix/main.cf
*   virtual_alias_maps = hash:/etc/postfix/virtual
*   virtual_alias_domains = mustardamus.com, akrasia.me, enkrateia.me
* sudo postmap /etc/postfix/virtual
* sudo newaliases
* sudo /etc/init.d/postfix reload && sudo /etc/init.d/postfix restart
*   http://willjackson.org/blog/configure-postfix-forward-e-mail-external-address
*   http://mailboxtools.com/tools/smtptest.aspx

* sudo nano /etc/apt/apt.conf.d/20auto-upgrades
*   APT::Periodic::Update-Package-Lists "1";
    APT::Periodic::Download-Upgradeable-Packages "1";
    APT::Periodic::AutocleanInterval "7";
    APT::Periodic::Unattended-Upgrade "1";

* sudo ufw allow 22511/tcp
* sudo ufw allow 80/tcp
* sudo ufw allow 443/tcp
* sudo ufw allow 25/tcp
* sudo ufw show added
* sudo ufw enable
* sudo ufw status verbose

* nano .bashrc
*  echo
*  pm2 list
*  echo

* sudo reboot now
