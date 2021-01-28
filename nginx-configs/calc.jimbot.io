server {
        listen 80;
        listen [::]:80;

        root /home/jim/www/calc.jimbot.io;

        index calc.html;

        server_name calc.jimbot.io;

        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ =404;
        }
}
