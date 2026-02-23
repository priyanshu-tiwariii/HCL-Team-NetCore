#!/bin/bash

# Exit if no nested path is provided
if [ -z "$1" ]; then
  echo "Error: Please provide a nested path."
  echo "Usage: ./generate-feature-list.sh parent/child (e.g., policy/motor)"
  exit 1
fi

INPUT_PATH=$1

# Ensure it is a nested path
if [[ "$INPUT_PATH" != *"/"* ]]; then
  echo "Error: No parent folder detected. Use ./generate-feature.sh for standalone modules (e.g., leads)."
  exit 1
fi

PARENT=$(dirname "$INPUT_PATH")
CHILD=$(basename "$INPUT_PATH")

CHILD_CAP=$(echo "$CHILD" | awk -F- '{for(i=1;i<=NF;i++){$i=toupper(substr($i,1,1)) substr($i,2)}} 1' OFS='')
PARENT_CAP=$(echo "$PARENT" | awk -F- '{for(i=1;i<=NF;i++){$i=toupper(substr($i,1,1)) substr($i,2)}} 1' OFS='')
CHILD_UPPER=$(echo "$CHILD" | tr '[:lower:]' '[:upper:]' | tr '-' '_')
PARENT_UPPER=$(echo "$PARENT" | tr '[:lower:]' '[:upper:]' | tr '-' '_')

BASE_DIR="src/app/features/$INPUT_PATH"

echo ""
echo "Scaffolding Nested Feature: $INPUT_PATH..."
echo ""

# 1. Folder structure
mkdir -p "$BASE_DIR/data/entities"
mkdir -p "$BASE_DIR/data/models"
mkdir -p "$BASE_DIR/data/repositories"
mkdir -p "$BASE_DIR/domain/services"
mkdir -p "$BASE_DIR/domain/types"
mkdir -p "$BASE_DIR/presentation/components"
mkdir -p "$BASE_DIR/presentation/pages/$CHILD-page"
mkdir -p "$BASE_DIR/presentation/state"

# 2. Manually create Angular core files (services, component, and tests)

# Repository Service
cat <<EOF > "$BASE_DIR/data/repositories/$CHILD-repository.service.ts"
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ${CHILD_CAP}RepositoryService {

}
EOF

cat <<EOF > "$BASE_DIR/data/repositories/$CHILD-repository.service.spec.ts"
import { TestBed } from '@angular/core/testing';

import { ${CHILD_CAP}RepositoryService } from './$CHILD-repository.service';

describe('${CHILD_CAP}RepositoryService', () => {
  let service: ${CHILD_CAP}RepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(${CHILD_CAP}RepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
EOF

# Logic Service
cat <<EOF > "$BASE_DIR/domain/services/$CHILD-logic.service.ts"
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ${CHILD_CAP}LogicService {

}
EOF

cat <<EOF > "$BASE_DIR/domain/services/$CHILD-logic.service.spec.ts"
import { TestBed } from '@angular/core/testing';

import { ${CHILD_CAP}LogicService } from './$CHILD-logic.service';

describe('${CHILD_CAP}LogicService', () => {
  let service: ${CHILD_CAP}LogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(${CHILD_CAP}LogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
EOF

# State Service
cat <<EOF > "$BASE_DIR/presentation/state/$CHILD-state.service.ts"
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ${CHILD_CAP}StateService {

}
EOF

cat <<EOF > "$BASE_DIR/presentation/state/$CHILD-state.service.spec.ts"
import { TestBed } from '@angular/core/testing';

import { ${CHILD_CAP}StateService } from './$CHILD-state.service';

describe('${CHILD_CAP}StateService', () => {
  let service: ${CHILD_CAP}StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(${CHILD_CAP}StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
EOF

# Page Component
cat <<EOF > "$BASE_DIR/presentation/pages/$CHILD-page/$CHILD-page.component.ts"
import { Component } from '@angular/core';

@Component({
  selector: 'app-$CHILD-page',
  standalone: true,
  imports: [],
  templateUrl: './$CHILD-page.component.html',
  styleUrl: './$CHILD-page.component.css'
})
export class ${CHILD_CAP}PageComponent {

}
EOF

cat <<EOF > "$BASE_DIR/presentation/pages/$CHILD-page/$CHILD-page.component.css"
/* styles go here */
EOF

cat <<EOF > "$BASE_DIR/presentation/pages/$CHILD-page/$CHILD-page.component.spec.ts"
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ${CHILD_CAP}PageComponent } from './$CHILD-page.component';

describe('${CHILD_CAP}PageComponent', () => {
  let component: ${CHILD_CAP}PageComponent;
  let fixture: ComponentFixture<${CHILD_CAP}PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [${CHILD_CAP}PageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(${CHILD_CAP}PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
EOF

# 3. Demo boilerplate files

# Entity
cat <<EOF > "$BASE_DIR/data/entities/$CHILD.entity.ts"
export interface ${CHILD_CAP}Entity {
  id: string;
}
EOF

# Models
cat <<EOF > "$BASE_DIR/data/models/$CHILD-request.model.ts"
export interface ${CHILD_CAP}Request {

}
EOF

cat <<EOF > "$BASE_DIR/data/models/$CHILD-response.model.ts"
export interface ${CHILD_CAP}Response {

}
EOF

# Domain types
cat <<EOF > "$BASE_DIR/domain/types/$CHILD.types.ts"
export type ${CHILD_CAP}Id = string;
EOF

# Component placeholder (as a simple class, with test)
cat <<EOF > "$BASE_DIR/presentation/components/$CHILD.component.ts"
export class ${CHILD_CAP}Component {

}
EOF

cat <<EOF > "$BASE_DIR/presentation/components/$CHILD.component.spec.ts"
import { ${CHILD_CAP}Component } from './$CHILD.component';

describe('${CHILD_CAP}Component', () => {
  it('should create an instance', () => {
    expect(new ${CHILD_CAP}Component()).toBeTruthy();
  });
});
EOF

# State placeholder (interface, no test needed)
cat <<EOF > "$BASE_DIR/presentation/state/$CHILD-state.model.ts"
export interface ${CHILD_CAP}State {

}
EOF

# 4. Create page component template
cat <<EOF > "$BASE_DIR/presentation/pages/$CHILD-page/$CHILD-page.component.html"
<div class="p-6">
  <h1 class="text-xl font-semibold">
    ${CHILD_CAP} Works
  </h1>
</div>
EOF

# 5. Create proper routing file
cat <<EOF > "$BASE_DIR/$CHILD.routes.ts"
import { Routes } from '@angular/router';

import { ${CHILD_CAP}PageComponent } from './presentation/pages/$CHILD-page/$CHILD-page.component';

export const ${PARENT_UPPER}_${CHILD_UPPER}_ROUTES: Routes = [
  {
    path: '',
    component: ${CHILD_CAP}PageComponent
  }
];
EOF

# 6. Barrel export
cat <<EOF > "$BASE_DIR/index.ts"
export * from './$CHILD.routes';

export * from './data/entities/$CHILD.entity';

export * from './data/models/$CHILD-request.model';

export * from './data/models/$CHILD-response.model';
EOF

# 7. Success message
echo ""
echo "Nested Feature '$INPUT_PATH' has been successfully scaffolded."
echo ""
echo "Location:"
echo "  $BASE_DIR"
echo ""
echo "-------------------------------------------------------------------------------------------------------------------------"
echo "Next steps:"
echo ""
echo "STEP 1: Add route to src/app/app.routes.ts"
echo "Add to the appropriate children array (e.g., under AppLayoutComponent):"
echo "  {"
echo "    path: '$INPUT_PATH',"
echo "    loadChildren: () => import('./features/$INPUT_PATH').then(m => m.${PARENT_UPPER}_${CHILD_UPPER}_ROUTES)"
echo "  },"
echo ""
echo "-------------------------------------------------------------------------------------------------------------------------"
echo "STEP 2: Update Sidebar in src/app/core/layout/config/nav.config.ts"
echo "Find or create the '$PARENT_CAP' group, and add this to its 'items' array:"
echo "  {"
echo "    label: '${PARENT_CAP}',"
echo "    icon: 'pi pi-folder', // Change this to the parent icon"
echo "    items: ["
echo "      // ... other items ... "
echo "      { label: '${CHILD_CAP}', icon: 'pi pi-file', routerLink: '/$PARENT/$CHILD/$CHILD.routes', module: '${CHILD_UPPER}' }"
echo "    ]"
echo "  }"
echo ""
echo "Done."
echo ""