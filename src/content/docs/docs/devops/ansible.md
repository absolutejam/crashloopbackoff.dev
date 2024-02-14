---
title: Ansible
---

## Setup

  - Running locally:

    ```bash
    export ANSIBLE_HOME=${HOME}/ansible
    export ANSIBLE_CONFIG=${ANSIBLE_HOME}/ansible.cfg

    cat <<EOF > ${ANSIBLE_CONFIG}
    [defaults]
    inventory = hosts
    roles_path = roles
    interpreter_python = auto_silent
    callbacks_enabled = community.general.unixy
    stdout_callback = unixy
    EOF
    ```

  - Running in Docker:

    ```bash
    TODO:
    ```
