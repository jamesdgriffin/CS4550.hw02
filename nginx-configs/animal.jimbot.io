server {
        listen 80;
        listen [::]:80;

        root /home/jim/www/animal.jimbot.io;

        index animal.html;

        server_name animal.jimbot.io;

        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ =404;
        }
}
