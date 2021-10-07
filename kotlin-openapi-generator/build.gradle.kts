import org.jetbrains.kotlin.gradle.tasks.KotlinCompile


plugins {
    kotlin("jvm") version "1.5.31"
    application
    kotlin("plugin.serialization") version "1.5.31"
    id("org.openapi.generator") version "5.2.1"
}

group = "com.stackhawk"
version = "1.0-SNAPSHOT"

repositories {
    mavenLocal()
    mavenCentral()
}

openApiGenerate {
    generatorName.set("kotlin")
    inputSpec.set("$rootDir/openapi-v3-public.json")
    outputDir.set("$buildDir/generated")
    apiPackage.set("com.stackhawk.api")
    invokerPackage.set("com.stackhawk.invoker")
    modelPackage.set("com.stackhawk.model")
    library.set("multiplatform")
    configOptions.set(
        mutableMapOf(
            "dateLibrary" to "java8"
        )
    )
}

tasks {
    val openApiGenerate by getting

    val compileKotlin by getting {
        dependsOn(openApiGenerate)
    }
}

sourceSets {
    getByName("main") {
        java {
            srcDir("$buildDir/generated/src/commonMain/kotlin")
        }
    }
}

dependencies {
    val ktorVersion = "1.6.3"
    testImplementation(kotlin("test"))
    implementation("io.ktor:ktor-client-core:$ktorVersion")
    implementation("io.ktor:ktor-client-cio:$ktorVersion")
    implementation("io.ktor:ktor-client-auth:$ktorVersion")
    implementation("io.ktor:ktor-client-serialization:$ktorVersion")

    implementation("ch.qos.logback:logback-classic:+")
    implementation("io.ktor:ktor-client-logging:$ktorVersion")

    implementation("com.squareup.moshi:moshi-kotlin:1.12.0")

    runtimeOnly("org.jetbrains.kotlin:kotlin-reflect:1.5.31")
}

tasks.test {
    useJUnitPlatform()
}

val jvmTarget = "1.8"

tasks.withType<KotlinCompile>() {
    kotlinOptions.jvmTarget = jvmTarget
}

tasks.withType<JavaCompile>() {
    targetCompatibility = jvmTarget
}

application {
    mainClass.set("MainKt")
}
