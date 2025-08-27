# Deploy — GitHub Pages

1. Build:
    ```bash
        ng build --base-href /
    ```

2. Publicar
    ```bash
        git add docs -f
        git commit -m "build(docs): publish"
        git push
   ```