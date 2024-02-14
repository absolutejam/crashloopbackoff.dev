---
title: Salt
---

## Setup


  - Running locally:

    ```bash
    # this is a custom env var
    export SALT_ROOT=${HOME}/salt_root

    # this is used by salt
    export SALT_CONFIG_DIR=${SALT_ROOT}

    cat <<EOF > ${SALT_ROOT}/minion
    root_dir: ${SALT_ROOT}
    pki_dir: ${SALT_ROOT}/pki
    cachedir: ${SALT_ROOT}/cache
    pidfile: ${SALT_ROOT}/master.pid
    sock_dir: ${SALT_ROOT}/sock
    log_file: ${SALT_ROOT}/logs
    conf_file: ${SALT_ROOT}/config
    sqlite_queue_dir: ${SALT_ROOT}/queues

    file_client: local

    file_roots:
      base:
        - ${SALT_ROOT}/states

    pillar_roots:
      base:
        - ${SALT_ROOT}/pillars
    ```

  - Running in Docker:

    ```bash
    TODO:
    ```
