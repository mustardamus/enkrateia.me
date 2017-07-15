<template>
  <div>

  </div>
</template>

<script>
const markdown = `
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
* node -v && npm -v && yarn --version
*   https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#platform-linux
* cd && mkdir .ssh && cd .ssh
* ssh-keygen -t rsa -b 4096 -C "contact@mustardamus.com"
* eval "$(ssh-agent -s)"
* ssh-add id_rsa
* cat id_rsa.pub
*   https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/#platform-linux
* cd && mkdir projects
* git clone https://github.com/mustardamus/enkrateia.me.git
* yarn
* HOST=0.0.0.0 yarn start
*   http://enkrateia.me:3000
* sudo nano /etc/apt/apt.conf.d/20auto-upgrades
*   APT::Periodic::Update-Package-Lists "1";
    APT::Periodic::Download-Upgradeable-Packages "1";
    APT::Periodic::AutocleanInterval "7";
    APT::Periodic::Unattended-Upgrade "1";
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
* sudo ufw allow 22511/tcp
* sudo ufw allow 80/tcp
* sudo ufw allow 443/tcp
* sudo ufw allow 25/tcp
* sudo ufw show added
* sudo ufw enable
* sudo ufw status verbose
* sudo yarn global add pm2
* pm2 start npm --name enkrateia.me -- start
* pm2 startup
* curl http://localhost:3000
* cd /etc/nginx/sites-available
* sudo nano enkrateia.me
*   server {
      listen 80;

      server_name enkrateia.me www.enkrateia.me;

      location / {
          proxy_pass http://localhost:3000;
          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection 'upgrade';
          proxy_set_header Host $host;
          proxy_cache_bypass $http_upgrade;
      }
  }
* cd ../sites-enabled
* sudo ln -s ../sites-available/enkrateia.me .
* sudo service nginx restart
* curl http://enkrateia.me
* sudo add-apt-repository ppa:certbot/certbot
* sudo apt-get update && sudo apt-get -y install certbot
`

export default {
  data () {
    return {
      markdown
    }
  }
}
</script>
