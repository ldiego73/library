# Crear y asignar el usuario

```
sudo adduser nexus
sudo chown -R nexus:nexus /opt/nexus
sudo nano /opt/nexus/bin/nexus.rc
```
```
run_as_user="nexus"
```

# Editar el data directory

```
sudo nano /opt/nexus/bin/nexus.vmoptions 
```

```
-Dkaraf.data=/opt/sonatype-work/nexus3
-Djava.io.tmpdir=/opt/sonatype-work/nexus3/tmp
```

# Crear servicio en systemd

```
sudo ln -s /opt/nexus/bin/nexus /etc/init.d/nexus
```

```
cd /etc/init.d
sudo chkconfig --add nexus
sudo chkconfig --levels 345 nexus on
```

# Modificar el limite de manejos de archivos

```
sudo nano /etc/security/limits.conf
nexus - nofile 65536
```

En caso estes en Ubuntu, descomentar la siguiente linea

```
sudo nano /etc/pam.d/common-session
# session required pam_limits.so
```

# Habilitar servicio

```
sudo service nexus start
```

# Vaidar que el servicio inicio correctamente

```
tail -f /opt/sonatype-work/nexus3/log/nexus.log
```