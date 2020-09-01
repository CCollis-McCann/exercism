#!/usr/bin/env bash

main () {
  local str_length=${#1}
  for ((i = str_length; i > 0; i--)); do
    local reverse_str+="${1:i-1:1}"
  done
  echo "${reverse_str}"
}

main "$@"
