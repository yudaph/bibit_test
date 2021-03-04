# Cara penggunaan

## Search

GET : http://localhost:8000/search

| Parameter | Required | Valid Option           | Default Value | Description                            |
|-----------|----------|------------------------|---------------|----------------------------------------|
| s         | yes      |                        | <empty>       | Movie title to search for.             |
| type      | no       | movie, series, episode | <empty>       | Type of result to return.              |
| y         | no       |                        | <empty>       | Year of release.                       |
| r         | no       | json, xml              | json          | The data type to return.               |
| page      | no       | 1-100                  | 1             | Page number to return.                 |
| callback  | no       | no                     | <empty>       | JSONP callback name.                   |
| v         | no       | 1                      | 1             | API version (reserved for future use). |

## Detail

GET : http://localhost:8000/detail

| Parameter | Required   | Valid Option           | Default Value | Description                            |
|-----------|------------|------------------------|---------------|----------------------------------------|
| i         | at least 1 |                        | <empty>       | A valid IMDb ID (e.g. tt1285016)       |
| s         | at least 1 |                        | <empty>       | Movie title to search for.             |
| type      | no         | movie, series, episode | <empty>       | Type of result to return.              |
| y         | no         |                        | <empty>       | Year of release.                       |
| r         | no         | json, xml              | json          | The data type to return.               |
| page      | no         | 1-100                  | 1             | Page number to return.                 |
| callback  | no         | no                     | <empty>       | JSONP callback name.                   |
| v         | no         | 1                      | 1             | API version (reserved for future use). |
