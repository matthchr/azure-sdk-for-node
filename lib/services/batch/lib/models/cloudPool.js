/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

var moment = require('moment');

/**
 * @class
 * Initializes a new instance of the CloudPool class.
 * @constructor
 * A pool in the Azure Batch service.
 * @member {string} [id] Gets or sets a string that uniquely identifies the
 * pool within the account. The id can contain any combination of
 * alphanumeric characters including hyphens and underscores, and cannot
 * contain more than 64 characters.
 * 
 * @member {string} [displayName] Gets or sets the display name for the pool.
 * 
 * @member {string} [url] Gets or sets the URL of the pool.
 * 
 * @member {string} [eTag] Gets or sets the ETag of the pool.
 * 
 * @member {date} [lastModified] Gets or sets the last modified time of the
 * pool.
 * 
 * @member {date} [creationTime] Gets or sets the creation time of the pool.
 * 
 * @member {string} [state] Gets or sets the current state of the pool.
 * Possible values include: 'active', 'deleting', 'upgrading'
 * 
 * @member {date} [stateTransitionTime] Gets or sets the time at which the
 * pool entered its current state.
 * 
 * @member {string} [allocationState] Gets or sets whether the pool is
 * resizing. Possible values include: 'steady', 'resizing', 'stopping'
 * 
 * @member {date} [allocationStateTransitionTime] Gets or sets the time at
 * which the pool entered its current allocation state.
 * 
 * @member {string} [vmSize] Gets or sets the size of virtual machines in the
 * pool.  All VMs in a pool are the same size.
 * 
 * @member {object} [cloudServiceConfiguration] Gets or sets the cloud service
 * configuration for the pool. This property and VirtualMachineConfiguration
 * are mutually exclusive and one of the properties must be specified.
 * 
 * @member {string} [cloudServiceConfiguration.osFamily] Gets or sets the
 * Azure Guest OS family to be installed on the virtual machines in the pool.
 * 
 * @member {string} [cloudServiceConfiguration.targetOSVersion] Gets or sets
 * the Azure Guest OS version to be installed on the virtual machines in the
 * pool. The default value is * which specifies the latest operating system
 * version for the specified OS family.
 * 
 * @member {string} [cloudServiceConfiguration.currentOSVersion] Gets or sets
 * the Azure Guest OS Version currently installed on the virtual machines in
 * the pool. This may differ from TargetOSVersion if the pool state is
 * Upgrading.
 * 
 * @member {object} [virtualMachineConfiguration] Gets or sets the virtual
 * machine configuration for the pool. This property and
 * CloudServiceConfiguration are mutually exclusive and one of the properties
 * must be specified.
 * 
 * @member {object} [virtualMachineConfiguration.imageReference] Gets or sets
 * information about the platform or marketplace image to use.
 * 
 * @member {string} [virtualMachineConfiguration.imageReference.publisher]
 * Gets or sets the publisher of the image.
 * 
 * @member {string} [virtualMachineConfiguration.imageReference.offer] Gets or
 * sets the offer of the image.
 * 
 * @member {string} [virtualMachineConfiguration.imageReference.sku] Gets or
 * sets the SKU of the image.
 * 
 * @member {string} [virtualMachineConfiguration.imageReference.version] Gets
 * or sets the version of the image. A value of 'latest' can be specified to
 * select the latest version of an image.
 * 
 * @member {string} [virtualMachineConfiguration.nodeAgentSKUId] Gets or sets
 * the SKU of Batch Node Agent that needs to be provisioned on the compute
 * node. This property must match the ImageReference property.
 * 
 * @member {object} [virtualMachineConfiguration.windowsConfiguration] Gets or
 * sets Windows operating system settings on the virtual machine. This
 * property must not be specified if the ImageReference property referencs a
 * Linux OS image.
 * 
 * @member {boolean}
 * [virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
 * Gets or sets whether virtual machine is enabled for automatic updates. If
 * omitted, the default value is true.
 * 
 * @member {moment.duration} [resizeTimeout] Gets or sets the timeout for
 * allocation of compute nodes to the pool. In a Get Pool operation, this is
 * the timeout for the most recent resize operation. The default value is 10
 * minutes.
 * 
 * @member {object} [resizeError] Gets or sets details of any error
 * encountered while performing the last resize on the pool. This property is
 * set only if an error occurred during the last pool resize, and only when
 * the pool AllocationState is Steady.
 * 
 * @member {string} [resizeError.code] Gets or sets an identifier for the pool
 * resize error.  Codes are invariant and are intended to be consumed
 * programmatically.
 * 
 * @member {string} [resizeError.message] Gets or sets a message describing
 * the pool resize error, intended to be suitable for display in a user
 * interface.
 * 
 * @member {array} [resizeError.values] Gets or sets a list of additional
 * error details related to the pool resize error.
 * 
 * @member {number} [currentDedicated] Gets or sets the number of compute
 * nodes currently in the pool.
 * 
 * @member {number} [targetDedicated] Gets or sets the desired number of
 * compute nodes in the pool. This property must have the default value if
 * EnableAutoScale is true. It is required if EnableAutoScale is false.
 * 
 * @member {boolean} [enableAutoScale] Gets or sets whether the pool size
 * should automatically adjust over time. If true, the AutoScaleFormula
 * property must be set. If false, the TargetDedicated property must be set.
 * 
 * @member {string} [autoScaleFormula] Gets or sets a formula for the desired
 * number of compute nodes in the pool.
 * 
 * @member {moment.duration} [autoScaleEvaluationInterval] Gets or sets a time
 * interval for the desired AutoScale evaluation period in the pool.
 * 
 * @member {object} [autoScaleRun] Gets or sets the results and errors from
 * the last execution of the autoscale formula.
 * 
 * @member {date} [autoScaleRun.timestamp] Gets or sets the time at which the
 * autoscale formula was last evaluated.
 * 
 * @member {string} [autoScaleRun.results] Gets or sets the final values of
 * all variables used in the evaluation of the autoscale formula.  Each
 * variable value is returned in the form $variable=value, and variables are
 * separated by semicolons.
 * 
 * @member {object} [autoScaleRun.error] Gets or sets details of the error
 * encountered evaluating the autoscale formula on the pool, if the
 * evaluation was unsuccessful.
 * 
 * @member {string} [autoScaleRun.error.code] Gets or sets an identifier for
 * the autoscale error.  Codes are invariant and are intended to be consumed
 * programmatically.
 * 
 * @member {string} [autoScaleRun.error.message] Gets or sets a message
 * describing the autoscale error, intended to be suitable for display in a
 * user interface.
 * 
 * @member {array} [autoScaleRun.error.values] Gets or sets a list of
 * additional error details related to the autoscale error.
 * 
 * @member {boolean} [enableInterNodeCommunication] Gets or sets whether the
 * pool permits direct communication between nodes.
 * 
 * @member {object} [startTask] Gets or sets a task specified to run on each
 * compute node as it joins the pool.
 * 
 * @member {string} [startTask.commandLine] Gets or sets the command line of
 * the start task.
 * 
 * @member {array} [startTask.resourceFiles] Gets or sets a list of files that
 * Batch will download to the compute node before running the command line.
 * 
 * @member {array} [startTask.environmentSettings] Gets or sets a list of
 * environment variable settings for the start task.
 * 
 * @member {boolean} [startTask.runElevated] Gets or sets whether to run the
 * start task in elevated mode. The default value is false.
 * 
 * @member {number} [startTask.maxTaskRetryCount] Gets or sets the maximum
 * number of times the task may be retried.
 * 
 * @member {boolean} [startTask.waitForSuccess] Gets or sets whether the Batch
 * Service should wait for the start task to complete successfully (that is,
 * to exit with exit code 0) before scheduling any tasks on the compute node.
 * 
 * @member {array} [certificateReferences] Gets or sets the list of
 * certificates to be installed on each compute node in the pool.
 * 
 * @member {array} [applicationPackageReferences] Gets or sets the list of
 * application packages to be installed on each compute node in the pool.
 * 
 * @member {number} [maxTasksPerNode] Gets or sets the maximum number of tasks
 * that can run concurrently on a single compute node in the pool.
 * 
 * @member {object} [taskSchedulingPolicy] Gets or sets how the Batch service
 * distributes tasks between compute nodes in the pool.
 * 
 * @member {string} [taskSchedulingPolicy.nodeFillType] Gets or sets how tasks
 * should be distributed across compute nodes. Possible values include:
 * 'spread', 'pack', 'unmapped'
 * 
 * @member {array} [metadata] Gets or sets a list of name-value pairs
 * associated with the pool as metadata.
 * 
 * @member {object} [stats] Gets or sets utilization and resource usage
 * statistics for the entire lifetime of the pool.
 * 
 * @member {string} [stats.url] Gets or sets the URL for the statistics.
 * 
 * @member {date} [stats.startTime] Gets or sets the start time of the time
 * range covered by the statistics.
 * 
 * @member {date} [stats.lastUpdateTime] Gets or sets the time at which the
 * statistics were last updated. All statistics are limited to the range
 * between startTime and lastUpdateTime.
 * 
 * @member {object} [stats.usageStats] Gets or sets statistics related to pool
 * usage information, such as the amount of core-time used.
 * 
 * @member {date} [stats.usageStats.startTime] Gets or sets the start time of
 * the time range covered by the statistics.
 * 
 * @member {date} [stats.usageStats.lastUpdateTime] Gets or sets the time at
 * which the statistics were last updated. All statistics are limited to the
 * range between startTime and lastUpdateTime.
 * 
 * @member {moment.duration} [stats.usageStats.dedicatedCoreTime] Gets or sets
 * the aggregated wall-clock time of the dedicated compute node cores being
 * part of the pool.
 * 
 * @member {object} [stats.resourceStats] Gets or sets statistics related to
 * resource consumption by compute nodes in the pool.
 * 
 * @member {date} [stats.resourceStats.startTime] Gets or sets the start time
 * of the time range covered by the statistics.
 * 
 * @member {date} [stats.resourceStats.lastUpdateTime] Gets or sets the time
 * at which the statistics were last updated. All statistics are limited to
 * the range between startTime and lastUpdateTime.
 * 
 * @member {number} [stats.resourceStats.avgCPUPercentage] Gets or sets the
 * average CPU usage across all nodes in the pool (percentage per node).
 * 
 * @member {number} [stats.resourceStats.avgMemoryGiB] Gets or sets the
 * average memory usage in GiB across all nodes in the pool.
 * 
 * @member {number} [stats.resourceStats.peakMemoryGiB] Gets or sets the peak
 * memory usage in GiB across all nodes in the pool.
 * 
 * @member {number} [stats.resourceStats.avgDiskGiB] Gets or sets the average
 * used disk space in GiB across all nodes in the pool.
 * 
 * @member {number} [stats.resourceStats.peakDiskGiB] Gets or sets the peak
 * used disk space in GiB across all nodes in the pool.
 * 
 * @member {number} [stats.resourceStats.diskReadIOps] Gets or sets the total
 * number of disk read operations across all nodes in the pool.
 * 
 * @member {number} [stats.resourceStats.diskWriteIOps] Gets or sets the total
 * number of disk write operations across all nodes in the pool.
 * 
 * @member {number} [stats.resourceStats.diskReadGiB] Gets or sets the total
 * amount of data in GiB of disk reads across all nodes in the pool.
 * 
 * @member {number} [stats.resourceStats.diskWriteGiB] Gets or sets the total
 * amount of data in GiB of disk writes across all nodes in the pool.
 * 
 * @member {number} [stats.resourceStats.networkReadGiB] Gets or sets the
 * total amount of data in GiB of network reads across all nodes in the pool.
 * 
 * @member {number} [stats.resourceStats.networkWriteGiB] Gets or sets the
 * total amount of data in GiB of network writes across all nodes in the pool.
 * 
 */
function CloudPool() {
}

/**
 * Defines the metadata of CloudPool
 *
 * @returns {object} metadata of CloudPool
 *
 */
CloudPool.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'CloudPool',
    type: {
      name: 'Composite',
      className: 'CloudPool',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        displayName: {
          required: false,
          serializedName: 'displayName',
          type: {
            name: 'String'
          }
        },
        url: {
          required: false,
          serializedName: 'url',
          type: {
            name: 'String'
          }
        },
        eTag: {
          required: false,
          serializedName: 'eTag',
          type: {
            name: 'String'
          }
        },
        lastModified: {
          required: false,
          serializedName: 'lastModified',
          type: {
            name: 'DateTime'
          }
        },
        creationTime: {
          required: false,
          serializedName: 'creationTime',
          type: {
            name: 'DateTime'
          }
        },
        state: {
          required: false,
          serializedName: 'state',
          type: {
            name: 'Enum',
            allowedValues: [ 'active', 'deleting', 'upgrading' ]
          }
        },
        stateTransitionTime: {
          required: false,
          serializedName: 'stateTransitionTime',
          type: {
            name: 'DateTime'
          }
        },
        allocationState: {
          required: false,
          serializedName: 'allocationState',
          type: {
            name: 'Enum',
            allowedValues: [ 'steady', 'resizing', 'stopping' ]
          }
        },
        allocationStateTransitionTime: {
          required: false,
          serializedName: 'allocationStateTransitionTime',
          type: {
            name: 'DateTime'
          }
        },
        vmSize: {
          required: false,
          serializedName: 'vmSize',
          type: {
            name: 'String'
          }
        },
        cloudServiceConfiguration: {
          required: false,
          serializedName: 'cloudServiceConfiguration',
          type: {
            name: 'Composite',
            className: 'CloudServiceConfiguration'
          }
        },
        virtualMachineConfiguration: {
          required: false,
          serializedName: 'virtualMachineConfiguration',
          type: {
            name: 'Composite',
            className: 'VirtualMachineConfiguration'
          }
        },
        resizeTimeout: {
          required: false,
          serializedName: 'resizeTimeout',
          type: {
            name: 'TimeSpan'
          }
        },
        resizeError: {
          required: false,
          serializedName: 'resizeError',
          type: {
            name: 'Composite',
            className: 'ResizeError'
          }
        },
        currentDedicated: {
          required: false,
          serializedName: 'currentDedicated',
          type: {
            name: 'Number'
          }
        },
        targetDedicated: {
          required: false,
          serializedName: 'targetDedicated',
          type: {
            name: 'Number'
          }
        },
        enableAutoScale: {
          required: false,
          serializedName: 'enableAutoScale',
          type: {
            name: 'Boolean'
          }
        },
        autoScaleFormula: {
          required: false,
          serializedName: 'autoScaleFormula',
          type: {
            name: 'String'
          }
        },
        autoScaleEvaluationInterval: {
          required: false,
          serializedName: 'autoScaleEvaluationInterval',
          type: {
            name: 'TimeSpan'
          }
        },
        autoScaleRun: {
          required: false,
          serializedName: 'autoScaleRun',
          type: {
            name: 'Composite',
            className: 'AutoScaleRun'
          }
        },
        enableInterNodeCommunication: {
          required: false,
          serializedName: 'enableInterNodeCommunication',
          type: {
            name: 'Boolean'
          }
        },
        startTask: {
          required: false,
          serializedName: 'startTask',
          type: {
            name: 'Composite',
            className: 'StartTask'
          }
        },
        certificateReferences: {
          required: false,
          serializedName: 'certificateReferences',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'CertificateReferenceElementType',
                type: {
                  name: 'Composite',
                  className: 'CertificateReference'
                }
            }
          }
        },
        applicationPackageReferences: {
          required: false,
          serializedName: 'applicationPackageReferences',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ApplicationPackageReferenceElementType',
                type: {
                  name: 'Composite',
                  className: 'ApplicationPackageReference'
                }
            }
          }
        },
        maxTasksPerNode: {
          required: false,
          serializedName: 'maxTasksPerNode',
          type: {
            name: 'Number'
          }
        },
        taskSchedulingPolicy: {
          required: false,
          serializedName: 'taskSchedulingPolicy',
          type: {
            name: 'Composite',
            className: 'TaskSchedulingPolicy'
          }
        },
        metadata: {
          required: false,
          serializedName: 'metadata',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'MetadataItemElementType',
                type: {
                  name: 'Composite',
                  className: 'MetadataItem'
                }
            }
          }
        },
        stats: {
          required: false,
          serializedName: 'stats',
          type: {
            name: 'Composite',
            className: 'PoolStatistics'
          }
        }
      }
    }
  };
};

module.exports = CloudPool;