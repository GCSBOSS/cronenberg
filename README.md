# [Cronenberg](https://gitlab.com/GCSBOSS/cronenberg)

A RESTful service specialized in receiving and managing web file uploads.

## Get Started

1. Install with: `npm i -g cronenberg`.
2. Write your config file in the following format:
```yaml
cook-hen:
  spec: "* * * * *" # Crontab spec
  method: post
  url: http://kitchen/dish
  body: some hen, please # Optional
  headers: # Optional
    Content-Type: text/plain

boil-water:
  spec: "1,30 * * * *"
  method: post
  url: http://kitchen/hot-water

# ...
```

3. Run in the terminal with: `cronenberg -c path/to/conf.yml`.

## Reporting Bugs
If you have found any problems with this module, please:

1. [Open an issue](https://gitlab.com/GCSBOSS/cronenberg/issues/new).
2. Describe what happened and how.
3. Also in the issue text, reference the label `~bug`.

We will make sure to take a look when time allows us.

## Proposing Features
If you wish to get that awesome feature or have some advice for us, please:
1. [Open an issue](https://gitlab.com/GCSBOSS/cronenberg/issues/new).
2. Describe your ideas.
3. Also in the issue text, reference the label `~proposal`.

## Contributing
If you have spotted any enhancements to be made and is willing to get your hands
dirty about it, fork us and
[submit your merge request](https://gitlab.com/GCSBOSS/cronenberg/merge_requests/new)
so we can collaborate effectively.
