
from pprint import pprint
import csv


def parse_csv_demo():

    with open(filename, newline='') as csvfile:
        reader = csv.reader(csvfile, delimiter=",")

        # Ignore the first row
        reader.__next__()

        # Get column headers
        headers = reader.__next__()

        ###
        # Drop the last 4 Headers
        headers = headers[:-4]

        print()
        print("Reading CSV...")

        # Print out the Headers
        print()
        print("Headers:")
        print(headers)

        # Get data
        data = []

        for row in reader:
            data.append(row[:-4])

    # Print raw data
    print()
    print("Data:")
    for row in data:
        print(row)

    # Get type definitions
    types = {}

    for row in data:
        type = row[2]

        if type not in types:
            types[type] = {headers[3]: row[3],
                           headers[4]: row[4],
                           headers[5]: row[5],
                           headers[6]: row[6],
                           headers[7]: row[7]}

    print()
    print("Types:")
    pprint(types)
    print()

    print("-To be continued...")
    print()

    exit(0)

    return


def parse_csv():

    with open(filename, newline='') as csvfile:
        reader = csv.reader(csvfile, delimiter=",")

        # Ignore the first row
        reader.__next__()

        # Get column headers
        headers = reader.__next__()

        ###
        # Get the first 7 column headers
        headers = headers[:8]

        # Get data
        data = []

        for row in reader:
            data.append(row[:8])
    '''print(data)'''
    return (headers, data)


def print_data(headers, data):

    # Print raw data
    print()
    print("Headers:")
    print(headers)

    print()
    print("Data:")
    for row in data:
        print(row)
    print()

    return


def format_data_in_json(headers, data):
    '''
    # Get type definitions
    if True:
        types = {}

        for row in data:
            type = row[2]

            if type not in types:
                types[type] = {headers[3]:row[3],
                            headers[4]:row[4],
                            headers[5]:row[5],
                            headers[6]:row[6],
                            headers[7]:row[7]}

        print()
        print("Types:")
        pprint(types)
        print()
    '''

    # Prepare vars
    sites = []
    unitTaskNames = []
    buildings = []
    unitTypes = []
    unitTaskAmounts = []
    units = []

    # CHEATED
    # GET sites
    if True:
        # populate item and append it to sites
        sites.append({"siteId": 0,
                      "siteName": "Libertad Glendale",
                      "phaseLabel": "Building"})

        print("sites:")
        pprint(sites)
        print()

    # GET unitTaskNames
    if True:
        for task_name in headers[3:]:
            # create unit_task_name_id
            unit_task_name_id = len(unitTaskNames)

            # populate item and append it to unitTaskNames
            unitTaskNames.append({"unitTaskNameId": unit_task_name_id,
                                  "taskName": task_name})

        print("unitTaskNames:")
        pprint(unitTaskNames)
        print()

    # GET buildings
    if True:
        for row in data:
            # get building_name
            building_name = row[0]

            # prevent duplicates
            if building_name in [comp["buildingName"] for comp in buildings]:
                continue

            # create building_id
            building_id = len(buildings)

            # populate item and append it to buildings
            buildings.append({"buildingId": building_id,
                              "siteId": 0,  # How are we supposed to do this?
                              "buildingName": building_name})

        print("buildings:")
        pprint(buildings)
        print()

    # GET unitTypes
    if True:
        for row in data:
            # get unitType_name
            unitType_name = row[2]

            # prevent duplicates
            if unitType_name in [comp["unitTypeName"] for comp in unitTypes]:
                continue

            # create unit_type_id
            unit_type_id = len(unitTypes)

            # populate item and append it to unitTypes
            unitTypes.append({"unitTypeId": unit_type_id,
                              "siteId": 0,  # How are we supposed to do this?
                              "unitTypeName": unitType_name})

        print("unitTypes:")
        pprint(unitTypes)
        print()

    # GET unitTaskAmounts
    if True:
        # get a list of all types, so we can empty it as we go (checklist)
        types_to_check = [comp["unitTypeName"] for comp in unitTypes]

        for row in data:
            # get unitType_name
            unitType_name = row[2]

            # prevent duplicates
            if unitType_name not in types_to_check:
                continue

            # figure out the unit_type_id
            for item in unitTypes:
                if item["unitTypeName"] == unitType_name:
                    unit_type_id = item["unitTypeId"]
                    break

            # get all unit_tasks
            unit_tasks = row[3:]

            for task_amount in unit_tasks:
                # create unit_task_amount_id
                unit_task_amount_id = len(unitTaskAmounts)

                # get unit_task_name_id
                unit_task_name_id = unit_tasks.index(task_amount)

                # populate item and append it to unitTaskAmounts
                unitTaskAmounts.append({"unitTaskAmountId": unit_task_amount_id,
                                        "unitTypeId": unit_type_id,
                                        "unitTaskNameId": unit_task_name_id,
                                        "taskAmount": task_amount})

            # remove type from types_to_check, to prevent duplicates
            types_to_check.remove(unitType_name)

        print("unitTaskAmounts:")
        # pprint(unitTaskAmounts)
        for item in unitTaskAmounts:
            print(item)
        #print(*unitTaskAmounts, sep="\n")
        print()

    # GET units
    if True:
        for row in data:
            # create unit_id
            unit_id = len(units)

            # get unit_name
            unit_name = row[1]

            # figure out the building_id
            building_name = row[0]

            for item in buildings:
                if item["buildingName"] == building_name:
                    building_id = item["buildingId"]
                    break

            # figure out the unit_type_id
            unitType_name = row[2]

            for item in unitTypes:
                if item["unitTypeName"] == unitType_name:
                    unit_type_id = item["unitTypeId"]
                    break

            # populate item and append it to units
            units.append({"unitId": unit_id,
                          "buildingId": building_id,
                          "unitTypeId": unit_type_id,
                          "unitName": unit_name})

        print("units:")
        # pprint(units)
        for item in units:
            print(item)
        #print(*units, sep="\n")
        print()

    final_json = {}

    final_json["sites"] = sites
    final_json["unitTaskNames"] = unitTaskNames
    final_json["buildings"] = buildings
    final_json["unitTypes"] = unitTypes
    final_json["unitTaskAmounts"] = unitTaskAmounts
    final_json["units"] = units

    print()
    print("final_json:")
    pprint(final_json)
    # for item in final_json:
    #    pprint(item)

    return final_json


### LOGIC ###
directory = "src/components/"
title = "./stepping_stone_data.csv"
filename = title

# DEMO - parse the CSV
# parse_csv_demo()

# Read and parse CSV
(headers, data) = parse_csv()

# Print CSV data
print_data(headers, data)

# Format and return JSON
final_json = format_data_in_json(headers, data)

# Store in DB
