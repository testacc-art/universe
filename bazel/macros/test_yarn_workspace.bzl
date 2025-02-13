"""
Tests Yarn Workspaces via Jest.
"""

load("@npm//jest:index.bzl", "jest", _jest_test = "jest_test")

# TODO: should we build the source and test the built files instead (?)
def test_yarn_workspace(name, deps = [], **kwargs):
    """
    A macro around the autogenerated jest_test rule

    Args:
      name: name of the target
      deps: dependencies necessary for the target to build/test
      **kwargs: other Jest arguments
    """

    jest_config = "//:.jest-bazel.config.js"
    srcs = native.glob([
        "**/*.js",
        "**/__tests__/**/*.*",
        "**/__snapshots__/*.snap",
    ])

    templated_args = [
        "--no-cache",
        "--no-watchman",
        "--ci",
        "--colors",
    ]

    templated_args.extend(["--config", "$(rootpath %s)" % jest_config])

    for src in srcs:
        templated_args.extend(["--runTestsByPath", "$(rootpath %s)" % src])

    data = [
        jest_config,
        "//:babel.config.js",
        "@npm//@adeira/babel-preset-adeira",
        "@npm//istanbul-lib-report",
    ] + srcs + deps

    _jest_test(
        size = "small",
        name = name,
        data = data,
        templated_args = templated_args,
        **kwargs
    )

    # This rule is used specifically to update snapshots via `bazel run`
    jest(
        name = "%s.update" % name,
        data = data,
        templated_args = templated_args + ["-u"],
        **kwargs
    )
