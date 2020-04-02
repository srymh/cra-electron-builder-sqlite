@echo off
setlocal
set npm_config_build-from-source=true
set npm_config_save=true
set npm_config_runtime=electron
set npm_config_target=8.2.0
set npm_config_dist-url=https://atom.io/download/electron
yarn add sqlite3
endlocal
